import globals from "globals";
import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node, // require
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
        },
    },
];
