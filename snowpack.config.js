module.exports = {
  mount: {
  // directory name: 'build directory'
   public: '/',
   src: '/dist',
  },
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        htmlMinifierOptions: true,
        failOnWarnings: true
      },
      '@snowpack/plugin-react-refresh'
    ]
  ]
}
