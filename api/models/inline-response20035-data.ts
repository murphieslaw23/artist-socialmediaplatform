/* tslint:disable */
/* eslint-disable */
/**
 * API Documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PaginationModel } from './pagination-model';
import { UserModel } from './user-model';
/**
 * 
 * @export
 * @interface InlineResponse20035Data
 */
export interface InlineResponse20035Data {
    /**
     * 
     * @type {Array<UserModel & any>}
     * @memberof InlineResponse20035Data
     */
    users?: Array<UserModel & any>;
    /**
     * 
     * @type {PaginationModel}
     * @memberof InlineResponse20035Data
     */
    pagination?: PaginationModel;
}
