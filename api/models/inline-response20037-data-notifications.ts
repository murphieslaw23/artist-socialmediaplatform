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
import { InlineResponse20033DataUserLiked } from './inline-response20033-data-user-liked';
import { InlineResponse20036DataArtworks } from './inline-response20036-data-artworks';
/**
 * 
 * @export
 * @interface InlineResponse20037DataNotifications
 */
export interface InlineResponse20037DataNotifications {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20037DataNotifications
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20037DataNotifications
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20037DataNotifications
     */
    commentId?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20037DataNotifications
     */
    comment?: string;
    /**
     * 
     * @type {Array<InlineResponse20033DataUserLiked>}
     * @memberof InlineResponse20037DataNotifications
     */
    userReplied?: Array<InlineResponse20033DataUserLiked>;
    /**
     * 
     * @type {InlineResponse20036DataArtworks}
     * @memberof InlineResponse20037DataNotifications
     */
    artworks?: InlineResponse20036DataArtworks;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20037DataNotifications
     */
    totalLiked?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20037DataNotifications
     */
    restTotalLiked?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20037DataNotifications
     */
    createdAt?: string;
}
