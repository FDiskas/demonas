module.exports = (
    /** @type {import('plop').NodePlopAPI} */
    plop,
) => {
    plop.setGenerator('component', {
        description: 'Create a reusable component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: '.templates/Component/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: '.templates/Component/Component.test.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/index.ts',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/components/index.ts',
                template: `export * from './{{pascalCase name}}/{{pascalCase name}}';\n`,
                skipIfExists: true,
            },
        ],
    });

    plop.setGenerator('screen', {
        description: 'Create a screen',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your page name?',
            },
            {
                type: 'confirm',
                name: 'navigator',
                message: 'Add to navigation?',
                default: false,
            },
        ],
        actions: ({ navigator }) => {
            const actions = [
                {
                    type: 'add',
                    path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.tsx',
                    templateFile: '.templates/Component/Component.tsx.hbs',
                },
                {
                    type: 'add',
                    path: 'src/screens/index.ts',
                    skipIfExists: true,
                },
                {
                    type: 'append',
                    path: 'src/screens/index.ts',
                    template: `export * from './{{pascalCase name}}/{{pascalCase name}}';\n`,
                    skipIfExists: true,
                },
            ];
            if (navigator) {
                actions.push(
                    {
                        type: 'add',
                        path: 'src/routes/index.ts',
                        templateFile: '.templates/screen.ts.hbs',
                        skipIfExists: true,
                    },
                    {
                        type: 'append',
                        path: 'src/routes/index.ts',
                        pattern: `/* PLOP_INJECT_IMPORT */`,
                        template: `import { {{pascalCase name}} } from 'app/screens';`,
                    },
                    {
                        type: 'append',
                        path: 'src/routes/index.ts',
                        pattern: `/* PLOP_INJECT_EXPORT */`,
                        template: `    {{pascalCase name}},`,
                    },
                );
            }
            return actions;
        },
    });

    plop.setGenerator('service', {
        description: 'Create service',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your service name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/services/{{camelCase name}}.ts',
                templateFile: '.templates/service.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/services/index.ts',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/services/index.ts',
                template: `export * from './{{camelCase name}}';\n`,
                skipIfExists: true,
            },
        ],
    });
};
