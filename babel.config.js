module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        pure: true,
        displayName: false,
      },
    ],
    ['babel-plugin-react-docgen-typescript', {exclude: 'node_modules'}],

    [
      'module:react-native-dotenv',
      {
        envName: 'IS_STORYBOOK',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: ['IS_STORYBOOK'],
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
