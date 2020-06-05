module.exports = function(api) {
  api.cache(true)

  const presets = ['@babel/preset-env']
  const plugins = ['@babel/plugin-transform-runtime', 'istanbul', '@babel/plugin-proposal-class-properties']
  const ignore = ['ecosystem.config.js']

  return {
    presets,
    plugins,
    ignore,
    "sourceMaps": "inline",
    "retainLines": true
  }
}
