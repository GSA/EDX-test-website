module.exports = {
    ci: {
      assert: {
        preset: "lighthouse:recommended",
      },
      collect: {
        startServerCommand: 'bundle exec jekyll serve',
        url: ['http://localhost:4000']
      },
      upload: {
        target: 'temporary-public-storage'
      },
    },
  };