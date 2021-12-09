declare module 'amethyste-api' {
    export class ameClient {

        public constructor(token: string, options?: ameClientOptions);

        private token: string;
        public options?: ameClientOptions;

        public generate(endpoint: string): Promise<Object>;

        public image(endpoint: string): Promise<Object>;

        public getEndpointsGenerate(onlyFree: boolean): Promise<any>;

        public getEndpointsImage(onlyFree: boolean): Promise<any>;

    }

    export type ameClientOptions = {
        [x: string]: any;
        baseURL?: string;
    };
}
