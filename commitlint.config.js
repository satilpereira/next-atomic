// commitlint.config.js
// module.exports = {
//     extends: ['@commitlint/config-conventional']
//   };
export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test', 'perf', 'ci', 'build', 'revert']],
    },
  };
  