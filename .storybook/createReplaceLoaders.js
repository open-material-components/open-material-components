const defaultPackages = [
  { name: 'button', type: 'tag' },
  { name: 'checkbox', type: 'tag' },
  { name: 'checkbox-group', type: 'tag' },
  { name: 'field', type: 'tag' },
  { name: 'fieldset', type: 'tag' },
  { name: 'form', type: 'tag' },
  // { name: 'form-system', type: 'replace' },
  { name: 'icon', type: 'tag' },
  { name: 'input', type: 'tag' },
  { name: 'input-amount', type: 'tag' },
  { name: 'input-date', type: 'tag' },
  { name: 'input-email', type: 'tag' },
  { name: 'input-iban', type: 'tag' },
  { name: 'radio', type: 'tag' },
  { name: 'radio-group', type: 'tag' },
  { name: 'select', type: 'tag' },
  { name: 'steps', type: 'tag' },
  // { name: 'step', type: 'sub-tag', package: 'steps' },
  { name: 'textarea', type: 'tag' },
  { name: 'tooltip', type: 'tag' },
];

function getClassName(tagName) {
  return tagName
    .split('-')
    .reduce((previous, part) => previous + part.charAt(0).toUpperCase() + part.slice(1), '');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function createReplaceLoader(path, replacements) {
  if (process.platform === 'win32') {
    path = path.replace(/\//g, '\\\\');
  }

  const multiple = [];
  replacements.forEach(repl => {
    if (repl.type === 'tag') {
      multiple.push({ search: `<${repl.from}`, replace: `<${repl.to}`, flags: 'g' });
      multiple.push({ search: `</${repl.from}>`, replace: `</${repl.to}>`, flags: 'g' });
    } else {
      multiple.push({
        search: `${escapeRegExp(repl.from)}`,
        replace: `${repl.to}`,
        flags: 'g',
      });
    }
  });

  return {
    test: new RegExp(
      `(\\\/|\\\\)node_modules(\\\/|\\\\)${path}(\\\/|\\\\)stories(\\\/|\\\\).*stories.js`,
    ),
    loader: 'string-replace-loader',
    options: {
      multiple,
    },
  };
}

const defaultGetTagImportPath = ({ name, targetTagName }) => {
  return `../../../../packages/${name}/${targetTagName}.js`;
};

const defaultGetClassImportPath = ({ name }) => {
  return `../../../../packages/${name}`;
};

function createReplaceLoaders({
  getTagImportPath = defaultGetTagImportPath,
  getClassImportPath = defaultGetClassImportPath,
  packages = defaultPackages,
  sourcePrefix = 'lion',
  sourceScope = '@lion',
  prefix,
} = {}) {
  const globalReplacements = [];
  const loaders = [];

  packages.forEach(pkg => {
    const name = pkg.name;
    const sourceTagName = `${sourcePrefix}-${name}`;
    const targetTagName = `${prefix}-${name}`;

    // == tags ==
    globalReplacements.push({ from: sourceTagName, to: targetTagName, type: 'tag' });
    // external usage e.g. via `import '@lion/button/lion-button.js';`
    globalReplacements.push({
      from: `${sourceScope}/${name}/${sourceTagName}.js`,
      to: getTagImportPath({ name, targetTagName }),
    });

    // == classes ==
    // external usage e.g. via `import { LionButton } from '@lion/button';`
    globalReplacements.push({
      from: `${sourceScope}/${name}';`,
      to: getClassImportPath({ name }) + "';",
    });
  });

  packages.forEach(pkg => {
    const name = pkg.name;
    const path = `${sourceScope}/${name}`;
    const sourceTagName = `${sourcePrefix}-${name}`;
    const targetTagName = `${prefix}-${name}`;
    const sourceClassName = getClassName(sourceTagName);
    const targetClassName = getClassName(targetTagName);

    const localReplacements = [];

    // "internal" usage e.g. via `import '../lion-button.js';`
    localReplacements.push({
      from: `../${sourceTagName}.js`,
      to: getTagImportPath({ name, targetTagName }),
    });

    // "internal" usage e.g. via `import { LionButton } from '../index.js';`
    localReplacements.push({
      from: `../index.js`,
      to: getClassImportPath({ name }),
    });
    localReplacements.push({
      from: sourceClassName,
      to: targetClassName,
    });

    loaders.push(createReplaceLoader(path, localReplacements));
    loaders.push(createReplaceLoader(path, globalReplacements));
  });

  return loaders;
}

module.exports = {
  createReplaceLoader,
  createReplaceLoaders,
  defaultPackages,
};
