const createView = ({
  componentName
}: {
  componentName: string;
}) => {
  return `import {
  ${componentName}ViewProps
} from './${componentName}.types';

export default function ${componentName}View(props: ${componentName}ViewProps) {
  return (
    <></>
  );
}  
  `
}

export default createView;