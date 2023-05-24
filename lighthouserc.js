module.exports = {
    ci: {
      collect: {
        startServerCommand: 'bundle exec jekyll serve',
        url: ['http://localhost:4000']
    },
      upload: {
        target: 'temporary-public-storage',
    },
    },
  };