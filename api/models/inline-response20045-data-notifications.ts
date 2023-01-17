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
import { InlineResponse20044DataFollowerDetail } from './inline-response20044-data-follower-detail';
/**
 * 
 * @export
 * @interface InlineResponse20045DataNotifications
 */
export interface InlineResponse20045DataNotifications {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20045DataNotifications
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20045DataNotifications
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20045DataNotifications
     */
    comment?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse20045DataNotifications
     */
    isRead?: boolean;
    /**
     * 
     * @type {Array<InlineResponse20044DataFollowerDetail>}
     * @memberof InlineResponse20045DataNotifications
     */
    users?: Array<InlineResponse20044DataFollowerDetail>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20045DataNotifications
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20045DataNotifications
     */
    restTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20045DataNotifications
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20045DataNotifications
     */
    type?: InlineResponse20045DataNotificationsTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum InlineResponse20045DataNotificationsTypeEnum {
    Like = 'like',
    Comment = 'comment'
}

