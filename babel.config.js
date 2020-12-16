module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@entities': './src/entities',
        '@controllers': './src/controllers',
        '@config': './src/config',
        '@useCases': './src/useCases',
        '@repositories': './src/repositories'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
