module.exports = {
    root: true,
    env: { browser: true, es2020: true, jest: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react'],
    rules: {
        'react/jsx-no-target-blank': 'off',
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'all',
                tabWidth: 12,
                semi: false,
                bracketSpacing: true,
                eslintIntegration: true
            }
        ]
    }
};
