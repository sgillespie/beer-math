module.exports = {
  use: [
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
      }
    }],

    'neutrino-preset-jest',
  ],

  options: {
    tests: 'src'
  }
};
