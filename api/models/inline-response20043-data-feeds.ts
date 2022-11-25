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
import { ArtworkAssetsModel } from './artwork-assets-model';
import { InlineResponse20043DataArtworkShareInfo } from './inline-response20043-data-artwork-share-info';
import { InlineResponse20043DataCount } from './inline-response20043-data-count';
import { InlineResponse20043DataRedrawedArtworkInfo } from './inline-response20043-data-redrawed-artwork-info';
import { UserLiteModel } from './user-lite-model';
/**
 * 
 * @export
 * @interface InlineResponse20043DataFeeds
 */
export interface InlineResponse20043DataFeeds {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20043DataFeeds
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20043DataFeeds
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20043DataFeeds
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20043DataFeeds
     */
    userId?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20043DataFeeds
     */
    isExplicit?: InlineResponse20043DataFeedsIsExplicitEnum;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20043DataFeeds
     */
    scheduledPost?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20043DataFeeds
     */
    redrawOf?: number;
    /**
     * 
     * @type {UserLiteModel}
     * @memberof InlineResponse20043DataFeeds
     */
    users?: UserLiteModel;
    /**
     * 
     * @type {InlineResponse20043DataArtworkShareInfo}
     * @memberof InlineResponse20043DataFeeds
     */
    artworkShareInfo?: InlineResponse20043DataArtworkShareInfo;
    /**
     * 
     * @type {InlineResponse20043DataRedrawedArtworkInfo}
     * @memberof InlineResponse20043DataFeeds
     */
    redrawedArtworkInfo?: InlineResponse20043DataRedrawedArtworkInfo;
    /**
     * 
     * @type {Array<ArtworkAssetsModel>}
     * @memberof InlineResponse20043DataFeeds
     */
    artworkAssets?: Array<ArtworkAssetsModel>;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse20043DataFeeds
     */
    liked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse20043DataFeeds
     */
    saved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20043DataFeeds
     */
    visibility?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20043DataFeeds
     */
    whoCanReply?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20043DataFeeds
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20043DataFeeds
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20043DataFeeds
     */
    type?: InlineResponse20043DataFeedsTypeEnum;
    /**
     * 
     * @type {InlineResponse20043DataCount}
     * @memberof InlineResponse20043DataFeeds
     */
    count?: InlineResponse20043DataCount;
}

/**
    * @export
    * @enum {string}
    */
export enum InlineResponse20043DataFeedsIsExplicitEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum InlineResponse20043DataFeedsTypeEnum {
    Artwork = 'artwork',
    Feed = 'feed'
}

