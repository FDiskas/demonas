const create = () => {
    let examplePrivateVariable = 0;

    return {
        getExamplePrivateVariable: () => {
            return examplePrivateVariable;
        },
        setExamplePrivateVariable: (n: any) => {
            examplePrivateVariable = n;
        },
    };
};

const singleton = create();
Object.freeze(singleton);

export default singleton;
