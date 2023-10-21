const createIndex = ({
  componentName
}: {
  componentName: string;
}) => {
  return `import use${componentName}Model from './${componentName}.model';
import ${componentName}View from './${componentName}.view';
import { 
  ${componentName}ViewModelProps 
} from './${componentName}.types'

export default function ${componentName}ViewModel(props: ${componentName}ViewModelProps) {
  const model = use${componentName}Model(props);
  return <${componentName}View {...model} />;
}  
  `
}

export default createIndex;