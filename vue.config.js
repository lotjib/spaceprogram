// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
 // настройки...
 publicPath: process.env.NODE_ENV === 'production'
   ? '/spaceprogram/'
   : '/spaceprogram/',

 transpileDependencies: [
   'vuetify'
 ]
}
