module.exports = {
  // eslint-disable-next-line max-len
  // extends: ['@mate-academy/eslint-config-react-typescript', 'plugin:cypress/recommended'],
  extends: ['@mate-academy/eslint-config-react', 'plugin:cypress/recommended'],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'react/prop-types': 0,
    'no-console': 1,
  },
};
