const createModel = ({
  componentName
}: {
  componentName: string;
}) => {
  return `import {
  ${componentName}ModelProps
} from './${componentName}.types';

export default function use${componentName}(props: ${componentName}ModelProps) {
  return {

  }
}  
  `
}

export default createModel;