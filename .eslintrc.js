module.exports = {
    extends: ['airbnb-typescript', 'airbnb/hooks'],
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/indent': ['warn', 4],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-indent': ['warn', 4],
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-trailing-spaces': 'warn',
        'react/jsx-fragments': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'eol-last': 'warn',
        'import/newline-after-import': 'warn',
        'no-param-reassign': 'off',
        'react/button-has-type': 'off',
        'prefer-destructuring': 'warn',
        '@typescript-eslint/object-curly-spacing': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-indent-props': 'off',
        'arrow-body-style': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        'react/state-in-constructor': 'off',
        'object-curly-newline': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        'react/destructuring-assignment': 'off',
        'operator-linebreak': 'off',
        'operator-assignment': 'off',
        'no-magic-numbers': 'warn'
    }
}
