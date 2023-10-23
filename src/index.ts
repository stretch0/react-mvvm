#!/usr/bin/env node

import * as Case from 'case';
import { Command } from 'commander';
import * as fs from 'node:fs/promises';
import createIndex from './templates/createIndex';
import createView from './templates/createView';
import createModel from './templates/createModel';
import createTypes from './templates/createTypes';
import createTest from './templates/createTest';

const program = new Command();

const createIndexFile = ({
  path,
  template
}: {
  path: string;
  template: string;
}) => {
  return fs.writeFile(`${path}/index.tsx`, template);
}

const createMVVMFile = ({
  path,
  componentName,
  fileName,
  template
}: {
  path: string;
  componentName: string;
  fileName: string;
  template: string
}) => {
  return fs.writeFile(`${path}/${componentName}.${fileName}`, template)
}

program
  .name('mvvm')
  .description('CLI to scaffold MVVM files')
  .version('1.0.0');

program.command('create')
  .description('Create MVVM component')
  .argument('<component name>', 'name of component')
  .option('-p, --path <char>', 'path character', './')
  .action(async (str, options) => {
    const componentName = Case.pascal(str);
    
    const filePath = `./${options.path}/${componentName}`

    await fs.mkdir(filePath)

    await createIndexFile({ 
      path: filePath,
      template: createIndex({ componentName })
    })

    const files = [
      {
        fileName: 'view.tsx',
        template: createView({ componentName })
      },
      {
        fileName: 'model.tsx',
        template: createModel({ componentName })
      },
      {
        fileName: 'types.tsx',
        template: createTypes({ componentName })
      },
      {
        fileName: 'test.tsx',
        template: createTest({ componentName })
      },
      {
        fileName: 'styles.tsx',
        template: ''
      }
    ]

    const promises = files.map(({ fileName, template }) => (
      createMVVMFile({
        componentName,
        path: filePath,
        fileName,
        template
      })
    ))

    await Promise.all(promises);
    console.log(`${componentName} component created: ${filePath}`)
  });

program.parse();