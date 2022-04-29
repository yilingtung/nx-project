module.exports = {
  displayName: 'dashboard-feature-ui',
  preset: '../../../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
    '.+\\.(png|jpg|gif|ttf|woff|woff2|mp4)$':
      '<rootDir>/../../../../jest/stub.js',
    '^.+\\.svg$': '<rootDir>/../../../../jest/svgTransformer.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/dashboard/feature/ui',
  moduleNameMapper: {
    '^.+\\.(png|jpg|gif|ttf|woff|woff2|mp4)$':
      '<rootDir>/../../../../jest/fileMock.js',
  },
};
