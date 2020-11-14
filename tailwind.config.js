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

        // Dont think these colors will be used anywhere else but with tailwind
        // so I'm not duping them in base.css. I'm just lazy. Leave me alone.
        'normal': '#A8A77A',
        'fire': '#EE8130',
        'water': '#6390F0',
        'electric': '#F7D02C',
        'grass': '#7AC74C',
        'ice': '#96D9D6',
        'fighting': '#C22E28',
        'poison': '#A33EA1',
        'ground': '#E2BF65',
        'flying': '#A98FF3',
        'psychic': '#F95587',
        'bug': '#A6B91A',
        'rock': '#B6A136',
        'ghost': '#735797',
        'dragon': '#6F35FC',
        'dark': '#705746',
        'steel': '#B7B7CE',
        'fairy': '#D685AD',
      },
      maxWidth: {
        'screen-2xl': '1600px',
      }
    },
  }
};
