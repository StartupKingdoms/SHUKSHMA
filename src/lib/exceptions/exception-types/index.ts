import { BadRequestException } from "./BadRequest.exception";
import { ForbiddenException } from "./Forbidden.exception";
import {  InternalServerException} from "./InternalServer.exception";
import {  InvalidCredentialException } from "./InvalidCredential.exception";
import {  NotFoundException} from "./NotFound.exception";
import {   RepositoryException} from "./Repository.exception";
import {  PaymentFailedException} from "./PaymentFailed.exception";

const EXCEPTION_TYPES = [BadRequestException,
    ForbiddenException,
    InternalServerException,
    InvalidCredentialException,
    NotFoundException,
    RepositoryException,
    PaymentFailedException
]; 

export {EXCEPTION_TYPES} ;