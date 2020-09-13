module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/*',
    '!src/shared/http/*',
    '!src/styles/*',
    '!src/store/index.js',
    '!src/store/modules/groceries/index.js',
    '!src/store/modules/groceries/groceriesState.js'
  ],
}
