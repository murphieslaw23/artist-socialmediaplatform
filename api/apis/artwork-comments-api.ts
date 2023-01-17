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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ArtworksCommentsBody } from '../models';
import { InlineResponse20023 } from '../models';
import { InlineResponse2014 } from '../models';
import { SuccessMessageModel } from '../models';
/**
 * ArtworkCommentsApi - axios parameter creator
 * @export
 */
export const ArtworkCommentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add new comment to artwork
         * @param {ArtworksCommentsBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addComment: async (body?: ArtworksCommentsBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/artworks/comments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List comments of artwork
         * @param {number} id 
         * @param {number} perPage How many record to show per page of pagination
         * @param {number} page Pagination index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getComments: async (id: number, perPage: number, page: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getComments.');
            }
            // verify required parameter 'perPage' is not null or undefined
            if (perPage === null || perPage === undefined) {
                throw new RequiredError('perPage','Required parameter perPage was null or undefined when calling getComments.');
            }
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling getComments.');
            }
            const localVarPath = `/artworks/comments/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
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
         * @summary Remove a comment
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeComment: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling removeComment.');
            }
            const localVarPath = `/artworks/comments/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

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
 * ArtworkCommentsApi - functional programming interface
 * @export
 */
export const ArtworkCommentsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add new comment to artwork
         * @param {ArtworksCommentsBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addComment(body?: ArtworksCommentsBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2014>>> {
            const localVarAxiosArgs = await ArtworkCommentsApiAxiosParamCreator(configuration).addComment(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary List comments of artwork
         * @param {number} id 
         * @param {number} perPage How many record to show per page of pagination
         * @param {number} page Pagination index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getComments(id: number, perPage: number, page: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20023>>> {
            const localVarAxiosArgs = await ArtworkCommentsApiAxiosParamCreator(configuration).getComments(id, perPage, page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Remove a comment
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeComment(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SuccessMessageModel>>> {
            const localVarAxiosArgs = await ArtworkCommentsApiAxiosParamCreator(configuration).removeComment(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ArtworkCommentsApi - factory interface
 * @export
 */
export const ArtworkCommentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Add new comment to artwork
         * @param {ArtworksCommentsBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addComment(body?: ArtworksCommentsBody, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2014>> {
            return ArtworkCommentsApiFp(configuration).addComment(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List comments of artwork
         * @param {number} id 
         * @param {number} perPage How many record to show per page of pagination
         * @param {number} page Pagination index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getComments(id: number, perPage: number, page: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20023>> {
            return ArtworkCommentsApiFp(configuration).getComments(id, perPage, page, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove a comment
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeComment(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<SuccessMessageModel>> {
            return ArtworkCommentsApiFp(configuration).removeComment(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ArtworkCommentsApi - object-oriented interface
 * @export
 * @class ArtworkCommentsApi
 * @extends {BaseAPI}
 */
export class ArtworkCommentsApi extends BaseAPI {
    /**
     * 
     * @summary Add new comment to artwork
     * @param {ArtworksCommentsBody} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkCommentsApi
     */
    public async addComment(body?: ArtworksCommentsBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2014>> {
        return ArtworkCommentsApiFp(this.configuration).addComment(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary List comments of artwork
     * @param {number} id 
     * @param {number} perPage How many record to show per page of pagination
     * @param {number} page Pagination index
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkCommentsApi
     */
    public async getComments(id: number, perPage: number, page: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20023>> {
        return ArtworkCommentsApiFp(this.configuration).getComments(id, perPage, page, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Remove a comment
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkCommentsApi
     */
    public async removeComment(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<SuccessMessageModel>> {
        return ArtworkCommentsApiFp(this.configuration).removeComment(id, options).then((request) => request(this.axios, this.basePath));
    }
}
