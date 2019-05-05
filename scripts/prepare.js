#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

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

const output = [];
output.push('module.exports = [');

packages.forEach(pkg => {
  const filePath = `./node_modules/@lion/${pkg.name}/index.js`;
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');

    let esExports = [];
    const parts = content.match(/{(.|\n)*?}/g);
    parts.forEach(part => {
      const cleanedParts = part.replace(/{|}|\s/g, '');
      const wantedExports = cleanedParts.split(',').filter(v => v !== '' && !v.startsWith('Lion'));
      esExports = [...esExports, ...wantedExports];
    });
    const esExportsString = esExports.length > 0 ? `['${esExports.join("', '")}']` : '[]';
    output.push(`  { name: '${pkg.name}', exports: ${esExportsString} },`);
  }
});

output.push('];');
fs.writeFileSync('./scripts/setupData.js', output.join('\n'));
