module.exports = {
    ci: {
      collect: {
//         settings: {
//           plugins: ['lighthouse-plugin-edx'],
//         },
        startServerCommand: 'bundle exec jekyll serve',
        url: ['http://localhost:4000']
      },
      upload: {
        target: 'temporary-public-storage'
      },
    },
  };
