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
import { InlineResponse20017DataUsers } from './inline-response20017-data-users';
import { PaginationModel } from './pagination-model';
/**
 * 
 * @export
 * @interface InlineResponse20017Data
 */
export interface InlineResponse20017Data {
    /**
     * 
     * @type {Array<InlineResponse20017DataUsers>}
     * @memberof InlineResponse20017Data
     */
    users?: Array<InlineResponse20017DataUsers>;
    /**
     * 
     * @type {PaginationModel}
     * @memberof InlineResponse20017Data
     */
    pagination?: PaginationModel;
}
