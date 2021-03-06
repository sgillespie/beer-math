module.exports = {
  use: [
    ['@neutrinojs/airbnb', {
      eslint: {
        rules: {
          'comma-dangle': ['error', 'always-multiline'],
          'function-paren-newline': 'off',
          'indent': ['error', 2, {
            SwitchCase: 1,
            VariableDeclarator: {
              var: 2,
              let: 2,
              const: 3
            }
          }],
          'import/prefer-default-export': 'off',
          'no-underscore-dangle': 'off',
          // We're setting this off for now, until neutrino decides to
          // support overrides
          'no-unused-expressions': 'off',
          'no-use-before-define': ['error', {
            "functions": false,
          }],
          'object-curly-newline': ['error', {
            consistent: true,
          }],
          'react/forbid-prop-types': ['error', {
            forbid: ['any', 'array'],
          }],
          'react/jsx-filename-extension': 'off',
          'react/jsx-closing-bracket-location': ['error', {
            location: 'after-props',
          }],
        },

        overrides: {
          files: ['**/*.test.js'],
          rules: {
            'no-unused-expressions': 'off',
          },
        },
      }
    }],

    ['@neutrinojs/react', {
      html: {
        title: 'Beer Math',
        links: [
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
    }],

    ['@neutrinojs/jest', {
      coverageReporters: ['lcov', 'text'],
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/src/index.js',
      ],
      setupTestFrameworkScriptFile: '<rootDir>/src/setup.test.js',
      setupFiles: [
        'raf/polyfill'
      ],
      testPathIgnorePatterns: ['setup.test.js', '/node_modules/'],
    }],
  ],

  options: {
    tests: 'src'
  }
};
