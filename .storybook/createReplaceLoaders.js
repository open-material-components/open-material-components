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

function createReplaceLoaders(targetTags, packages) {
  const replacements = [];
  const loaders = [];

  targetTags.forEach(targetTag => {
    const parts = targetTag.split('-');
    parts.shift();
    const type = parts.join('-');
    const sourceTag = `lion-${type}`;
    // tag
    replacements.push({ from: sourceTag, to: targetTag, type: 'tag' });
    // external usage e.g. via @lion/button/lion-button.js
    replacements.push({
      from: `@lion/${type}/${sourceTag}.js`,
      // path for a real monorepo would be:
      // to: `../../../../packages/${type}/${targetTag}.js`,
      to: `../../../../${targetTag}.js`,
    });
    // "internal" usage e.g. via ../lion-button.js
    replacements.push({
      from: `../${sourceTag}.js`,
      // path for a real monorepo would be:
      // to: `../../../../packages/${type}/${targetTag}.js`,
      to: `../../../../${targetTag}.js`,
    });
  });

  packages.forEach(package => {
    loaders.push(createReplaceLoader(package, replacements));
  });

  return loaders;
}

module.exports = {
  createReplaceLoader,
  createReplaceLoaders,
};
