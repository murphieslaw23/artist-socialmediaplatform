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
import { CommentsReplyBody } from '../models';
import { InlineResponse20022 } from '../models';
import { InlineResponse2014 } from '../models';
import { SuccessMessageModel } from '../models';
/**
 * ArtworkCommentsRepliesApi - axios parameter creator
 * @export
 */
export const ArtworkCommentsRepliesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List replies of comment
         * @param {number} commentId 
         * @param {number} perPage How many record to show per page of pagination
         * @param {number} page Pagination index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReplies: async (commentId: number, perPage: number, page: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'commentId' is not null or undefined
            if (commentId === null || commentId === undefined) {
                throw new RequiredError('commentId','Required parameter commentId was null or undefined when calling getReplies.');
            }
            // verify required parameter 'perPage' is not null or undefined
            if (perPage === null || perPage === undefined) {
                throw new RequiredError('perPage','Required parameter perPage was null or undefined when calling getReplies.');
            }
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling getReplies.');
            }
            const localVarPath = `/artworks/comments/replies/{commentId}`
                .replace(`{${"commentId"}}`, encodeURIComponent(String(commentId)));
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
         * @summary Like a reply
         * @param {number} replyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        likeReply: async (replyId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'replyId' is not null or undefined
            if (replyId === null || replyId === undefined) {
                throw new RequiredError('replyId','Required parameter replyId was null or undefined when calling likeReply.');
            }
            const localVarPath = `/artworks/comments/reply/like/{replyId}`
                .replace(`{${"replyId"}}`, encodeURIComponent(String(replyId)));
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
         * @summary Remove a reply
         * @param {number} replyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeReply: async (replyId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'replyId' is not null or undefined
            if (replyId === null || replyId === undefined) {
                throw new RequiredError('replyId','Required parameter replyId was null or undefined when calling removeReply.');
            }
            const localVarPath = `/artworks/comments/reply/{replyId}`
                .replace(`{${"replyId"}}`, encodeURIComponent(String(replyId)));
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
        /**
         * 
         * @summary Reply a comment
         * @param {CommentsReplyBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reply: async (body?: CommentsReplyBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/artworks/comments/reply`;
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
         * @summary Unlike a reply
         * @param {number} replyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlikeReply: async (replyId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'replyId' is not null or undefined
            if (replyId === null || replyId === undefined) {
                throw new RequiredError('replyId','Required parameter replyId was null or undefined when calling unlikeReply.');
            }
            const localVarPath = `/artworks/comments/reply/unlike/{replyId}`
                .replace(`{${"replyId"}}`, encodeURIComponent(String(replyId)));
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
 * ArtworkCommentsRepliesApi - functional programming interface
 * @export
 */
export const ArtworkCommentsRepliesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List replies of comment
         * @param {number} commentId 
         * @param {number} perPage How many record to show per page of pagination
         * @param {number} page Pagination index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReplies(commentId: number, perPage: number, page: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20022>>> {
            const localVarAxiosArgs = await ArtworkCommentsRepliesApiAxiosParamCreator(configuration).getReplies(commentId, perPage, page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Like a reply
         * @param {number} replyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async likeReply(replyId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SuccessMessageModel>>> {
            const localVarAxiosArgs = await ArtworkCommentsRepliesApiAxiosParamCreator(configuration).likeReply(replyId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Remove a reply
         * @param {number} replyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeReply(replyId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SuccessMessageModel>>> {
            const localVarAxiosArgs = await ArtworkCommentsRepliesApiAxiosParamCreator(configuration).removeReply(replyId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Reply a comment
         * @param {CommentsReplyBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reply(body?: CommentsReplyBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2014>>> {
            const localVarAxiosArgs = await ArtworkCommentsRepliesApiAxiosParamCreator(configuration).reply(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Unlike a reply
         * @param {number} replyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unlikeReply(replyId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SuccessMessageModel>>> {
            const localVarAxiosArgs = await ArtworkCommentsRepliesApiAxiosParamCreator(configuration).unlikeReply(replyId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ArtworkCommentsRepliesApi - factory interface
 * @export
 */
export const ArtworkCommentsRepliesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary List replies of comment
         * @param {number} commentId 
         * @param {number} perPage How many record to show per page of pagination
         * @param {number} page Pagination index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReplies(commentId: number, perPage: number, page: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20022>> {
            return ArtworkCommentsRepliesApiFp(configuration).getReplies(commentId, perPage, page, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Like a reply
         * @param {number} replyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async likeReply(replyId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<SuccessMessageModel>> {
            return ArtworkCommentsRepliesApiFp(configuration).likeReply(replyId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove a reply
         * @param {number} replyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeReply(replyId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<SuccessMessageModel>> {
            return ArtworkCommentsRepliesApiFp(configuration).removeReply(replyId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Reply a comment
         * @param {CommentsReplyBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reply(body?: CommentsReplyBody, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2014>> {
            return ArtworkCommentsRepliesApiFp(configuration).reply(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Unlike a reply
         * @param {number} replyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unlikeReply(replyId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<SuccessMessageModel>> {
            return ArtworkCommentsRepliesApiFp(configuration).unlikeReply(replyId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ArtworkCommentsRepliesApi - object-oriented interface
 * @export
 * @class ArtworkCommentsRepliesApi
 * @extends {BaseAPI}
 */
export class ArtworkCommentsRepliesApi extends BaseAPI {
    /**
     * 
     * @summary List replies of comment
     * @param {number} commentId 
     * @param {number} perPage How many record to show per page of pagination
     * @param {number} page Pagination index
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkCommentsRepliesApi
     */
    public async getReplies(commentId: number, perPage: number, page: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20022>> {
        return ArtworkCommentsRepliesApiFp(this.configuration).getReplies(commentId, perPage, page, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Like a reply
     * @param {number} replyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkCommentsRepliesApi
     */
    public async likeReply(replyId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<SuccessMessageModel>> {
        return ArtworkCommentsRepliesApiFp(this.configuration).likeReply(replyId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Remove a reply
     * @param {number} replyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkCommentsRepliesApi
     */
    public async removeReply(replyId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<SuccessMessageModel>> {
        return ArtworkCommentsRepliesApiFp(this.configuration).removeReply(replyId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Reply a comment
     * @param {CommentsReplyBody} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkCommentsRepliesApi
     */
    public async reply(body?: CommentsReplyBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2014>> {
        return ArtworkCommentsRepliesApiFp(this.configuration).reply(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Unlike a reply
     * @param {number} replyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkCommentsRepliesApi
     */
    public async unlikeReply(replyId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<SuccessMessageModel>> {
        return ArtworkCommentsRepliesApiFp(this.configuration).unlikeReply(replyId, options).then((request) => request(this.axios, this.basePath));
    }
}
