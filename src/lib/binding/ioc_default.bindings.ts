// 
import {IocContainer} from '../IOC/ioc_container';
import { Container } from 'inversify';

import {DEFUALT_TYPES} from '../types/index';

// IMPORT ALL INTERFACES HERE
import {Log} from '../log/log';

// IMPORT ALL REPO IMPLIMENTATIONS FROM HERE
import {WinstonLogger} from '../log/winston_logger';
import { BunyanLogger } from '../log/bunyan_logger';


let ioc_container:Container = IocContainer.get_ioc_container();
ioc_container.bind<Log>(DEFUALT_TYPES.LOG).to(WinstonLogger)