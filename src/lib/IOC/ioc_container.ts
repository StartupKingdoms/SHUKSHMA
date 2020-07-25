import { Container } from 'inversify';

export class IocContainer{
    static container:Container ;

    private constructor(){}

    public static get_ioc_container(): Container {
        if (!IocContainer.container) {
            IocContainer.container = new Container();
        }
        return IocContainer.container;
    }

    // public static makeBinding(interfaceName ,classImpName){
    //     this.container.bind<any>(interfaceName).to(classImpName);
    // }
}