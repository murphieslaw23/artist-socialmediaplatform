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
import { UserLiteModel } from './user-lite-model';
/**
 * 
 * @export
 * @interface InlineResponse2017Data
 */
export interface InlineResponse2017Data {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2017Data
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2017Data
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2017Data
     */
    createdAt?: string;
    /**
     * 
     * @type {UserLiteModel}
     * @memberof InlineResponse2017Data
     */
    users?: UserLiteModel;
}
