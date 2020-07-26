"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 
var ioc_container_1 = require("../IOC/ioc_container");
var index_1 = require("../types/index");
// IMPORT ALL REPO IMPLIMENTATIONS FROM HERE
var winston_logger_1 = require("../log/winston_logger");
var ioc_container = ioc_container_1.IocContainer.get_ioc_container();
// 
ioc_container.bind(index_1.DEFUALT_TYPES.LOG).to(winston_logger_1.WinstonLogger);
//# sourceMappingURL=ioc_default.bindings.js.map