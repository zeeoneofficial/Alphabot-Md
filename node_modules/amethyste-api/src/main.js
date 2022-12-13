const {
    post,
    get
} = require("axios");

/**
 * @class ameClient
 **/
class ameClient {

    /**
     * @param {string} token provider api.amethyste.moe
     * @param {Object} options
     */
    constructor(token, options = {}) {
        if (!token) throw new Error("Unknown Token: Token Missing");
        if (typeof token !== "string") throw new SyntaxError("Invalid Token: Token must be a String");
        this.token = token;
        this.baseURL = options.baseURL || "https://v1.api.amethyste.moe";
    }

    /**
     * return image of an endpoint and data send
     * @param {string} endpoint - Name of the endpoint
     * @param {object} data - Object to send data (url, blur,ect...)
     * @returns {Promise<Object>}
     */
    async generate(endpoint, data = {}) {
        if (!endpoint) throw 'Missing endpoint';
        try {
            let image = await post(`${this.baseURL}/generate/${endpoint}`, data, {
                responseType: 'arraybuffer',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            });
            return image.data;
        } catch (err) {
            throw err;
        }
    }


    /**
     * return image of an endpoint and data send to json
     * @param {String} endpoint - Name of the endpoint
     * @param {object} data - Object to send data (nsfw, ect..)
     **/
    async image(endpoint, data = {}) {
        if (!endpoint) throw 'Missing endpoint';

        try {
            let image = await get(`${this.baseURL}/image/${endpoint}`, {
                params: {
                    data
                },
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            });
            return image.data;
        } catch (err) {
            throw err;
        }
    }

    /***
     * GET all endpoints of generation
     * @param {Boolean} onlyFree - Show only the free endpoints
     * @returns {Promise<Array>}
     */
    async getEndpointsGenerate(onlyFree= false) {
        try {
            let info = await get(`${this.baseURL}/generate`);
            if (!info.data) throw "Endpoints not found.";
            return onlyFree ? info.data.endpoints.free : [...info.data.endpoints.free, ...info.data.endpoints.premium];
        } catch (e) {
            throw e;
        }
    }

    /***
     * GET all endpoints of images
     * @param {Boolean} onlyFree - Show only the free endpoints
     * @returns {Promise<Array>}
     */
    async getEndpointsImage(onlyFree= false) {
        try {
            let info = await get(`${this.baseURL}/image`);
            if (!info.data) throw "Endpoints not found.";
            return onlyFree ? info.data.endpoints.free : [...info.data.endpoints.free, ...info.data.endpoints.premium];
        } catch (e) {
            throw e;
        }
    }
}

module.exports = ameClient;
