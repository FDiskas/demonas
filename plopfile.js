module.exports = (plop) => {
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
                path: 'src/components/{{pascalCase name}}/index.ts',
                templateFile: '.templates/Component/index.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/components/index.ts',
                templateFile: '.templates/injectable-index.ts.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/components/index.ts',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{{pascalCase name}}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/components/index.ts',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `    {{pascalCase name}},`,
            },
        ],
    });

    // TODO: implement screens
    plop.setGenerator('screen', {
        description: 'Create a screen',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your page name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile: 'plop-templates/Page/Page.js.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile: 'plop-templates/Page/Page.test.js.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile: 'plop-templates/Page/Page.module.css.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/index.js',
                templateFile: 'plop-templates/Page/index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/pages/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/pages/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
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
                templateFile: '.templates/injectable-index.ts.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/services/index.ts',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{camelCase name}} from './{{camelCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/services/index.ts',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `    {{camelCase name}},`,
            },
        ],
    });

    plop.setGenerator('hook', {
        description: 'Create a custom react hook',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your hook name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/hooks/{{camelCase name}}.js',
                templateFile: 'plop-templates/hook.js.hbs',
            },
            {
                type: 'add',
                path: 'src/hooks/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/hooks/index.js',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{camelCase name}} from './{{camelCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/hooks/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{camelCase name}},`,
            },
        ],
    });
};
