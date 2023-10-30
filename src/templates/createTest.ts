const createModel = ({
  componentName
}: {
  componentName: string;
}) => {
  return `import ${componentName}ViewModel from './index';

describe('${componentName}', () => {
  it('Should render ${componentName}', () => {
    // arrange

    // act

    // assert
  })
})
  `
}

export default createModel;