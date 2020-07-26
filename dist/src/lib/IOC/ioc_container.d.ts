import { Container } from 'inversify';
export declare class IocContainer {
    static container: Container;
    private constructor();
    static get_ioc_container(): Container;
}
