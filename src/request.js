import request from 'superagent';

const API_URL = 'http://localhost:4000/graphql';
const HEADERS = { Accept: 'application/json' };
const setPrefix = (prefix) => {
    return (req) => {
        if (req.url && req.url.indexOf(prefix) === -1) {
            req.url = `${prefix}${req.url}`;
        }

        return req;
    };
};

var builder = (httpMethod, apiMethod, params, headers=HEADERS) => {
    let paramsTransport = httpMethod === 'get' ?
        'query' :
        'send';
    return new Promise((resolve, reject) => {
        request[httpMethod](apiMethod)
            .set(headers)
            [paramsTransport](params)
            .use(setPrefix(API_URL))
            .end((err, res) => {
                if (err || !res || !res.ok) {

                    reject(err);
                } else {
                    resolve(res.body, res);
                }
            });
    });
};

export default {
	get(apiMethod, params, queueName) {
    return builder('get', apiMethod, params);
	}
};
