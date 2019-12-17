module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [0],
    'react/jsx-props-no-spreading': [0],
    'no-console': "off",
    'max-len': ['error', { code: 88 }],
    'prettier/prettier': 'error',
    'import/prefer-default-export': "off",
  },
};
