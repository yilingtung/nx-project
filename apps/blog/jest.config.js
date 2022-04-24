module.exports = {
  displayName: 'blog',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
    '.+\\.(png|jpg|gif|ttf|woff|woff2|mp4)$': '<rootDir>/../../jest/stub.js',
    '^.+\\.svg$': '<rootDir>/../../jest/svgTransformer.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/blog',
  moduleNameMapper: {
    // '^.+\\.(css|less|sass|scss)$': '<rootDir>/../../../../jest/fileMock.js',
    '^.+\\.(png|jpg|gif|ttf|woff|woff2|mp4)$':
      '<rootDir>/../../jest/fileMock.js',
  },
};
