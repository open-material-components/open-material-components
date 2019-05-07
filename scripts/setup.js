#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const setupData = require('./setupData.js');

const userData = {
  scope: '@omc',
  prefix: 'omc',
  prefixCamelCase: 'Omc',
  author: 'Open Material Components',
  githubGroupAndRepo: 'open-material-components/open-material-components',
};

const packages = [
  { name: 'button', type: 'default' },
  { name: 'checkbox', type: 'default' },
  { name: 'checkbox-group', type: 'withFieldMixin' },
  { name: 'form', type: 'default' },
  { name: 'fieldset', type: 'default' },
  { name: 'icon', type: 'default' },
  { name: 'input', type: 'withFieldMixin' },
  { name: 'input-amount', type: 'withFieldMixin' },
  { name: 'input-date', type: 'withFieldMixin' },
  { name: 'input-email', type: 'withFieldMixin' },
  { name: 'input-iban', type: 'withFieldMixin' },
  { name: 'radio', type: 'default' },
  { name: 'radio-group', type: 'withFieldMixin' },
  { name: 'select', type: 'withFieldMixin' },
  { name: 'steps', type: 'default' },
  { name: 'textarea', type: 'withFieldMixin' },
  { name: 'field-mixin', type: 'FieldMixin' },
];

const templatePackageJson = `
{
  "name": "<%= scope %>/<%= name %>",
  "version": "0.0.0",
  "description": "This is a default description",
  "author": "<%= author %>",
  "homepage": "https://github.com/<%= githubGroupAndRepo %>/",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/<%= githubGroupAndRepo %>.git",
    "directory": "packages/button"
  },
  "scripts": {
    "prepublishOnly": "../../scripts/insert-header.js"
  },
  "main": "index.js",
  "module": "index.js",
  "files": [
    "src",
    "stories",
    "test",
    "*.js"
  ],
  "dependencies": {
    "@lion/core": "^0.1.3",
    "@lion/<%= name %>": "^0.1.3"
  },
  "devDependencies": {
    "@open-wc/demoing-storybook": "^0.2.0",
    "@open-wc/testing": "^0.11.1"
  }
}
`;

const templateDefaultClass = `
import { css, html } from '@lion/core';
import { <%= sourceClassName %> } from '@lion/<%= name %>';

export class <%= targetClassName %> extends <%= sourceClassName %> {
  static get styles() {
    return [
      super.styles,
      css\`
        :host {
          /* your overrides */
        }
      \`,
    ];
  }
}
`;

const templateWithFieldMixinClass = `
import { css, html } from '@lion/core';
import { <%= sourceClassName %> } from '@lion/<%= name %>';
import { <%= prefixCamelCase %>FieldMixin } from '<%= scope %>/field-mixin';

export class <%= targetClassName %> extends <%= prefixCamelCase %>FieldMixin(<%= sourceClassName %>) {
  static get styles() {
    return [
      super.styles,
      css\`
        :host {
          /* your overrides */
        }
      \`,
    ];
  }
}
`;

const templateIndexJs = `
export { <%= targetClassName %> } from './src/<%= targetClassName %>.js';
`;

const templateDefine = `
import { <%= targetClassName %> } from './src/<%= targetClassName %>.js';

customElements.define('<%= targetTagName %>', <%= targetClassName %>);
`;

const templateStorybookIndex = `
import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../<%= targetTagName %>.js';

storiesOf('<%= targetClassName %>|Material Extras', module).add(
  'Overview',
  () => html\`
    <<%= targetTagName %>></<%= targetTagName %>>
  \`,
);
`;

const templateFieldMixin = `
import { dedupeMixin, css } from '@lion/core';
import '<%= scope %>/validation-feedback/<%= prefix %>-validation-feedback.js';

export const <%= prefixCamelCase %>FieldMixin = dedupeMixin(
  superclass =>
    // eslint-disable-next-line
    class <%= prefixCamelCase %>FieldMixin extends superclass {
      get slots() {
        return Object.assign(super.slots, {
          feedback: () => document.createElement('<%= prefix %>-validation-feedback'),
        });
      }

      static get styles() {
        return [
          css\`
            /* Your general style overrides */
          \`,
        ];
      }
    },
);
`;

function processTemplate(_fileContent, data = {}) {
  let fileContent = _fileContent.trim();
  Object.keys(data).forEach(key => {
    fileContent = fileContent.replace(new RegExp(`<%= ${key} %>`, 'g'), data[key]);
  });
  return fileContent;
}

function writeFileToPathOnDisk(toPath, fileContent) {
  const toPathDir = path.dirname(toPath);
  if (!fs.existsSync(toPathDir)) {
    fs.mkdirSync(toPathDir, { recursive: true });
  }
  fs.writeFileSync(toPath, fileContent);
}

function getClassName(tagName) {
  return tagName
    .split('-')
    .reduce((previous, part) => previous + part.charAt(0).toUpperCase() + part.slice(1), '');
}

function generateIndexJs(currentData) {
  const output = [];
  output.push(processTemplate(templateIndexJs, currentData));
  const pkgData = setupData.find(item => item.name === currentData.name);
  if (pkgData && pkgData.exports && pkgData.exports.length > 0) {
    let otherExports = 'export { ';
    otherExports += pkgData.exports.join(', ');
    otherExports += `} from '@lion/${currentData.name}';`;
    output.push(otherExports);
  }

  return `${output.join('\n')}\n`;
}

packages.forEach(pkg => {
  const sourceTagName = `lion-${pkg.name}`;
  const targetTagName = `${userData.prefix}-${pkg.name}`;
  const sourceClassName = getClassName(sourceTagName);
  const targetClassName = getClassName(targetTagName);

  const currentData = {
    name: pkg.name,
    sourceTagName,
    targetTagName,
    sourceClassName,
    targetClassName,
    ...userData,
  };

  writeFileToPathOnDisk(
    `./packages/${pkg.name}/package.json`,
    processTemplate(templatePackageJson, currentData),
  );
  writeFileToPathOnDisk(`./packages/${pkg.name}/index.js`, generateIndexJs(currentData));

  if (pkg.type === 'default' || pkg.type === 'withFieldMixin') {
    writeFileToPathOnDisk(
      `./packages/${pkg.name}/${targetTagName}.js`,
      processTemplate(templateDefine, currentData),
    );
    writeFileToPathOnDisk(
      `./packages/${pkg.name}/stories/index.stories.js`,
      processTemplate(templateStorybookIndex, currentData),
    );
  }

  if (pkg.type === 'default') {
    writeFileToPathOnDisk(
      `./packages/${pkg.name}/src/${targetClassName}.js`,
      processTemplate(templateDefaultClass, currentData),
    );
  }
  if (pkg.type === 'withFieldMixin') {
    writeFileToPathOnDisk(
      `./packages/${pkg.name}/src/${targetClassName}.js`,
      processTemplate(templateWithFieldMixinClass, currentData),
    );
  }

  if (pkg.type === 'FieldMixin') {
    writeFileToPathOnDisk(
      `./packages/${pkg.name}/src/${targetClassName}.js`,
      processTemplate(templateFieldMixin, currentData),
    );
  }
});
