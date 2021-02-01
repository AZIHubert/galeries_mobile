module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '#components': './src/components',
            '#contexts': './src/contexts',
            '#helpers': './src/helpers',
            '#ressources': './src/ressources',
            '#routes': './src/routes',
            '#src': './src',
          },
        },
      ],
    ],

  };
};
