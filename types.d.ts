declare module '*.svg' {
    import { SvgProps } from 'react-native-svg';

    const content: React.ComponentClass<SvgProps, any>;
    export default content;
}

declare type SimpleObject<T = any> = {
    [key: string]: T;
};

declare type Nullable<T> = T | null;

declare interface AppParameters {
    defaultPhonePrefix: string;
}

declare module '*.png';
declare module '*.gif';
