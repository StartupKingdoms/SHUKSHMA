"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentFailedException = exports.RepositoryException = exports.NotFoundException = exports.InvalidCredentialException = exports.InternalServerException = exports.ForbiddenException = exports.BadRequestException = exports.EXCEPTION_TYPES = void 0;
var BadRequest_exception_1 = require("./BadRequest.exception");
Object.defineProperty(exports, "BadRequestException", { enumerable: true, get: function () { return BadRequest_exception_1.BadRequestException; } });
var Forbidden_exception_1 = require("./Forbidden.exception");
Object.defineProperty(exports, "ForbiddenException", { enumerable: true, get: function () { return Forbidden_exception_1.ForbiddenException; } });
var InternalServer_exception_1 = require("./InternalServer.exception");
Object.defineProperty(exports, "InternalServerException", { enumerable: true, get: function () { return InternalServer_exception_1.InternalServerException; } });
var InvalidCredential_exception_1 = require("./InvalidCredential.exception");
Object.defineProperty(exports, "InvalidCredentialException", { enumerable: true, get: function () { return InvalidCredential_exception_1.InvalidCredentialException; } });
var NotFound_exception_1 = require("./NotFound.exception");
Object.defineProperty(exports, "NotFoundException", { enumerable: true, get: function () { return NotFound_exception_1.NotFoundException; } });
var Repository_exception_1 = require("./Repository.exception");
Object.defineProperty(exports, "RepositoryException", { enumerable: true, get: function () { return Repository_exception_1.RepositoryException; } });
var PaymentFailed_exception_1 = require("./PaymentFailed.exception");
Object.defineProperty(exports, "PaymentFailedException", { enumerable: true, get: function () { return PaymentFailed_exception_1.PaymentFailedException; } });
var EXCEPTION_TYPES = [BadRequest_exception_1.BadRequestException,
    Forbidden_exception_1.ForbiddenException,
    InternalServer_exception_1.InternalServerException,
    InvalidCredential_exception_1.InvalidCredentialException,
    NotFound_exception_1.NotFoundException,
    Repository_exception_1.RepositoryException,
    PaymentFailed_exception_1.PaymentFailedException
];
exports.EXCEPTION_TYPES = EXCEPTION_TYPES;
//# sourceMappingURL=index.js.map