/****************************************************
 * BaiduTextApi 的封装
 * Edit by : ChenGuanzhou (chenguanzhou@huohua.cn)
 * Create at : 2019-08-06 20:18:02
 *****************************************************/
var request = require("request");
var config = require("./config");

//get access token
function getAccessToken() {
    return new Promise(function(resolve, reject) {
        request.post(config.URL_CONFIG.ACCESS_TOKEN_URL, {}, (error, response) => {
            if (!error && response.statusCode == 200) {
                resolve(response.toJSON());
            } else if (error == "invalid_client") {
                reject("获取accesstoken错误，请检查API_KEY，SECRET_KEY是否正确！");
            }
        });
    });
}

async function exec() {
    try {
        var accessToken = await getAccessToken();
        console.log(accessToken);
    } catch (e) {
        console.log(e);
    }
}

exec();
