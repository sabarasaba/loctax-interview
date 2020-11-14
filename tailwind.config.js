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
        'accents-8': 'var(--accents-8)'
      },
      maxWidth: {
        'screen-2xl': '1600px',
      }
    },
  }
};
