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
import { ArtworkListModelArtworkAssets } from './artwork-list-model-artwork-assets';
/**
 * 
 * @export
 * @interface MinimalArtworkInfo
 */
export interface MinimalArtworkInfo {
    /**
     * 
     * @type {number}
     * @memberof MinimalArtworkInfo
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof MinimalArtworkInfo
     */
    isExplicit?: number;
    /**
     * 
     * @type {number}
     * @memberof MinimalArtworkInfo
     */
    isGore?: number;
    /**
     * 
     * @type {Array<ArtworkListModelArtworkAssets>}
     * @memberof MinimalArtworkInfo
     */
    artworkAssets?: Array<ArtworkListModelArtworkAssets>;
}
