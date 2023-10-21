const createModel = ({
  componentName
}: {
  componentName: string;
}) => {
  return `import use${componentName}Model from './${componentName}.model'

export interface ${componentName}ModelProps {};

export interface ${componentName}ViewModelProps {}

export type ${componentName}ViewProps = ReturnType<typeof use${componentName}Model>
  `
}

export default createModel;