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
import { InlineResponse20015DataUsers } from './inline-response20015-data-users';
import { PaginationModel } from './pagination-model';
/**
 * 
 * @export
 * @interface InlineResponse20015Data
 */
export interface InlineResponse20015Data {
    /**
     * 
     * @type {Array<InlineResponse20015DataUsers>}
     * @memberof InlineResponse20015Data
     */
    users?: Array<InlineResponse20015DataUsers>;
    /**
     * 
     * @type {PaginationModel}
     * @memberof InlineResponse20015Data
     */
    pagination?: PaginationModel;
}
