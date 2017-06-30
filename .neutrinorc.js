module.exports = {
  use: [
    ['neutrino-middleware-eslint', {
      eslint: {
        baseConfig: {
          extends: ['airbnb']
        },

        rules: {
          'comma-dangle': 'off',
          'indent': ['error', 2, {
            SwitchCase: 1,
            VariableDeclarator: {
              var: 2,
              let: 2,
              const: 3
            }
          }],
          'no-shadow': 'off',
          'no-unused-expressions': 'off',
          'no-use-before-define': 'off',
          'one-var': 'off',
          'jsx-a11y/href-no-hash': 'off',
          'react/jsx-filename-extension': 'off',
          'react/jsx-closing-bracket-location': 'off',
          'react/forbid-prop-types': 'off',
        }
      }
    }],

    ['neutrino-preset-react', {
      html: {
        title: 'Beer Math',
        links: [
          '//fonts.googleapis.com/css?family=Roboto:300,400,500,700',
          '//fonts.googleapis.com/icon?family=Material+Icons',

          {
            href: 'static/favicon.ico',
            rel: 'shortcut icon',
            type: 'image/png'
          }
        ],
        meta: [
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }
        ]
      },

      devServer: {
        open: true,
      }
    }],

    'neutrino-preset-jest',
  ],

  options: {
    tests: 'src'
  }
};
