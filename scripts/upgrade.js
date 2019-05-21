#!/usr/bin/env node

/* eslint-disable no-console */
const { lstatSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');

function anExec(cmd) {
  return new Promise(resolve => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(stdout || stderr);
    });
  });
}

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const packages = [
  { name: 'ajax' },
  { name: 'button' },
  { name: 'checkbox-group' },
  { name: 'checkbox' },
  { name: 'choice-input' },
  { name: 'core' },
  { name: 'field' },
  { name: 'fieldset' },
  { name: 'form-system' },
  { name: 'form' },
  { name: 'icon' },
  { name: 'input-amount' },
  { name: 'input-date' },
  { name: 'input-email' },
  { name: 'input-iban' },
  { name: 'input' },
  { name: 'localize' },
  { name: 'overlays' },
  { name: 'popup' },
  { name: 'radio-group' },
  { name: 'radio' },
  { name: 'select' },
  { name: 'steps' },
  { name: 'textarea' },
  { name: 'tooltip' },
  { name: 'validate' },
];

async function getTargetVersion(name) {
  const result = await anExec(`yarn info ${name} --versions --silent`);
  if (result) {
    const matches = result.match(/version:.*\s.*'(.*)'/m);
    console.log(`${name}: ${matches[1]}`);
    return matches[1];
  }
  return '';
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
}

async function getAllNewVersions() {
  const newPackages = {};

  await asyncForEach(packages, async pkg => {
    const name = `@lion/${pkg.name}`;
    newPackages[name] = await getTargetVersion(name);
  });
  return newPackages;
}

function updateVersions(pkgJsonData, newVersions) {
  Object.keys(pkgJsonData.dependencies).forEach(dep => {
    if (newVersions[dep]) {
      // eslint-disable-next-line no-param-reassign
      pkgJsonData.dependencies[dep] = `^${newVersions[dep]}`;
    }
  });
}

async function main() {
  console.log('Gathering latest versions...');
  const newVersions = await getAllNewVersions();

  console.log('Writing new package.json files...');
  const dirs = await getDirectories('./packages/');
  dirs.forEach(dir => {
    const pkgJson = readFileSync(`./${dir}/package.json`, 'utf-8');
    const pkgJsonData = JSON.parse(pkgJson);

    updateVersions(pkgJsonData, newVersions);

    writeFileSync(`./${dir}/package.json`, `${JSON.stringify(pkgJsonData, null, 2)}\n`, 'utf-8');
  });
}

main();
