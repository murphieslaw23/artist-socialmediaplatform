/* tslint:disable */
/* eslint-disable */
/**
 * Upy API Documentation
 * API documentation of Upy - a social community platform for Artists.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PaginationModel } from './pagination-model';
import { ReportModel } from './report-model';
/**
 * 
 * @export
 * @interface InlineResponse20042Data
 */
export interface InlineResponse20042Data {
    /**
     * 
     * @type {Array<ReportModel>}
     * @memberof InlineResponse20042Data
     */
    reports?: Array<ReportModel>;
    /**
     * 
     * @type {PaginationModel}
     * @memberof InlineResponse20042Data
     */
    pagination?: PaginationModel;
}
