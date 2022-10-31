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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse20025 } from '../models';
import { InlineResponse20026 } from '../models';
/**
 * ArtworkTagsApi - axios parameter creator
 * @export
 */
export const ArtworkTagsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get tag keys by comma separated tags
         * @param {string} tags 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKeysByTags: async (tags: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tags' is not null or undefined
            if (tags === null || tags === undefined) {
                throw new RequiredError('tags','Required parameter tags was null or undefined when calling getKeysByTags.');
            }
            const localVarPath = `/artworks/tags/get-keys-by-tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            if (tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Search available tags by keyword given
         * @param {string} keyword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchTags: async (keyword: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyword' is not null or undefined
            if (keyword === null || keyword === undefined) {
                throw new RequiredError('keyword','Required parameter keyword was null or undefined when calling searchTags.');
            }
            const localVarPath = `/artworks/tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            if (keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ArtworkTagsApi - functional programming interface
 * @export
 */
export const ArtworkTagsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get tag keys by comma separated tags
         * @param {string} tags 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getKeysByTags(tags: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20026>>> {
            const localVarAxiosArgs = await ArtworkTagsApiAxiosParamCreator(configuration).getKeysByTags(tags, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Search available tags by keyword given
         * @param {string} keyword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchTags(keyword: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<InlineResponse20025>>>> {
            const localVarAxiosArgs = await ArtworkTagsApiAxiosParamCreator(configuration).searchTags(keyword, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ArtworkTagsApi - factory interface
 * @export
 */
export const ArtworkTagsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get tag keys by comma separated tags
         * @param {string} tags 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getKeysByTags(tags: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20026>> {
            return ArtworkTagsApiFp(configuration).getKeysByTags(tags, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Search available tags by keyword given
         * @param {string} keyword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchTags(keyword: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<InlineResponse20025>>> {
            return ArtworkTagsApiFp(configuration).searchTags(keyword, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ArtworkTagsApi - object-oriented interface
 * @export
 * @class ArtworkTagsApi
 * @extends {BaseAPI}
 */
export class ArtworkTagsApi extends BaseAPI {
    /**
     * 
     * @summary Get tag keys by comma separated tags
     * @param {string} tags 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkTagsApi
     */
    public async getKeysByTags(tags: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20026>> {
        return ArtworkTagsApiFp(this.configuration).getKeysByTags(tags, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Search available tags by keyword given
     * @param {string} keyword 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkTagsApi
     */
    public async searchTags(keyword: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<InlineResponse20025>>> {
        return ArtworkTagsApiFp(this.configuration).searchTags(keyword, options).then((request) => request(this.axios, this.basePath));
    }
}
