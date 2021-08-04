module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-shadow': [2, { allow: ['state', 'getters'] }],
    'no-param-reassign': ['error', {
      props: true, ignorePropertyModificationsFor: ['state'],
    }],
    'max-len': [
      'error',
      {
        ignoreStrings: true,
        ignoreComments: true,
        ignoreUrls: true,
        code: 1500,
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
