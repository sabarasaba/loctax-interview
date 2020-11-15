module.exports = {
  purge: {
    content: [
      './src/components/**/*.{ts,tsx}',
      './src/features/**/*.{ts,tsx}',
    ],
  },

  theme: {
    extend: {
      colors: {
        'base-fg': 'var(--base-foreground)',
        'base-bg': 'var(--base-background)',
        'base-success': 'var(--base-success)',
        'accents-1': 'var(--accents-1)',
        'accents-2': 'var(--accents-2)',
        'accents-3': 'var(--accents-3)',
        'accents-4': 'var(--accents-4)',
        'accents-5': 'var(--accents-5)',
        'accents-6': 'var(--accents-6)',
        'accents-7': 'var(--accents-7)',
        'accents-8': 'var(--accents-8)',

        'normal': 'var(--poke-normal)',
        'fire': 'var(--poke-fire)',
        'water': 'var(--poke-water)',
        'electric': 'var(--poke-electric)',
        'grass': 'var(--poke-grass)',
        'ice': 'var(--poke-ice)',
        'fighting': 'var(--poke-fighting)',
        'poison': 'var(--poke-poison)',
        'ground': 'var(--poke-ground)',
        'flying': 'var(--poke-flying)',
        'psychic': 'var(--poke-psychic)',
        'bug': 'var(--poke-bug)',
        'rock': 'var(--poke-rock)',
        'ghost': 'var(--poke-ghost)',
        'dragon': 'var(--poke-dragon)',
        'dark': 'var(--poke-dark)',
        'steel': 'var(--poke-steel)',
        'fairy': 'var(--poke-fairy)'
      },
      maxWidth: {
        'screen-2xl': '1600px',
      }
    },
  }
};
