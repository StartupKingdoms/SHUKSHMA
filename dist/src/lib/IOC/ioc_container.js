"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IocContainer = void 0;
var inversify_1 = require("inversify");
var IocContainer = /** @class */ (function () {
    function IocContainer() {
    }
    IocContainer.get_ioc_container = function () {
        if (!IocContainer.container) {
            IocContainer.container = new inversify_1.Container();
        }
        return IocContainer.container;
    };
    return IocContainer;
}());
exports.IocContainer = IocContainer;
//# sourceMappingURL=ioc_container.js.map