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
import { InlineResponse20019 } from '../models';
/**
 * NotificationsMarkersFeedsApi - axios parameter creator
 * @export
 */
export const NotificationsMarkersFeedsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary return how many unexpanded feed notifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        countFeedNotifications: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/notifications/feeds/marker`;
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
 * NotificationsMarkersFeedsApi - functional programming interface
 * @export
 */
export const NotificationsMarkersFeedsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary return how many unexpanded feed notifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async countFeedNotifications(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20019>>> {
            const localVarAxiosArgs = await NotificationsMarkersFeedsApiAxiosParamCreator(configuration).countFeedNotifications(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NotificationsMarkersFeedsApi - factory interface
 * @export
 */
export const NotificationsMarkersFeedsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary return how many unexpanded feed notifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async countFeedNotifications(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20019>> {
            return NotificationsMarkersFeedsApiFp(configuration).countFeedNotifications(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NotificationsMarkersFeedsApi - object-oriented interface
 * @export
 * @class NotificationsMarkersFeedsApi
 * @extends {BaseAPI}
 */
export class NotificationsMarkersFeedsApi extends BaseAPI {
    /**
     * 
     * @summary return how many unexpanded feed notifications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsMarkersFeedsApi
     */
    public async countFeedNotifications(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20019>> {
        return NotificationsMarkersFeedsApiFp(this.configuration).countFeedNotifications(options).then((request) => request(this.axios, this.basePath));
    }
}
