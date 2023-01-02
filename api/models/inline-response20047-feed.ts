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
import { InlineResponse20047FeedCount } from './inline-response20047-feed-count';
import { UserLiteModel } from './user-lite-model';
/**
 * 
 * @export
 * @interface InlineResponse20047Feed
 */
export interface InlineResponse20047Feed {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    userId?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    text?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    visibility?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    whoCanReply?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    workId?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    feedId?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    createdAt?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    updatedAt?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    feedHasFiles?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    artworks?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20047Feed
     */
    feeds?: number;
    /**
     * 
     * @type {UserLiteModel}
     * @memberof InlineResponse20047Feed
     */
    users?: UserLiteModel;
    /**
     * 
     * @type {InlineResponse20047FeedCount}
     * @memberof InlineResponse20047Feed
     */
    count?: InlineResponse20047FeedCount;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse20047Feed
     */
    liked?: boolean;
}
