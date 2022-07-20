module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('assets/img/home-1.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
