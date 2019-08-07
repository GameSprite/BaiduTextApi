/****************************************************
 * BaiduTextApi 的封装
 * Edit by : ChenGuanzhou (1668831812@qq.com)
 * Create at : 2019-08-06 20:18:02
 *****************************************************/
var request = require("request");
var config = require("./config");
var fs = require("fs");
var path = require("path");
var urlencode = require("urlencode");

//get access token
function getAccessToken() {
    return new Promise(function(resolve, reject) {
        request.post(config.URL_CONFIG.ACCESS_TOKEN_URL, {}, (error, response) => {
            if (!error && response.statusCode == 200) {
                resolve(JSON.parse(response.body).access_token);
            } else {
                if (error) {
                    reject(error.toLocaleString());
                } else {
                    reject(response.body);
                }
            }
        });
    });
}

//get url of Accurate api
function getAccurateUrl(accessToken) {
    return config.URL_CONFIG["ACCURATE"] + "?access_token=" + accessToken;
}

function getPostRequestData(
    imagePath = "",
    recognize_granularity = "small",
    detect_direction = true,
    vertexes_location = false,
    probability = true
) {
    if (!imagePath) {
        console.error("imagePath参数不能为空");
        return;
    }
    if (!path.isAbsolute(imagePath)) {
        console.error("" + imagePath + "不是绝对路径");
    }

    let data = {
        image: null,
        recognize_granularity,
        detect_direction,
        vertexes_location,
        probability
    };

    //读图片的数据并base64加密
    try {
        data.image = urlencode(fs.readFileSync(imagePath).toString("base64"));
    } catch (e) {
        console.error(e.toLocaleString());
        return;
    }

    return data;
}
function obj2FormUrl(obj) {
    let r = "";
    for (const k in obj) {
        if (r) {
            r += "&";
        }
        if (obj.hasOwnProperty(k)) {
            r += `${k}=${obj[k]}`;
        }
    }
    return r;
}

function getImageTextData(accessToken, requestData) {
    return new Promise(function(resolve, reject) {
        request(
            {
                url: getAccurateUrl(accessToken),
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: obj2FormUrl(requestData)
            },
            (error, response) => {
                if (!error && response.statusCode == 200) {
                    resolve(response.body);
                } else {
                    if (error) {
                        reject(error.toLocaleString());
                    } else {
                        reject(response.body);
                    }
                }
            }
        );
    });
}

async function exec() {
    try {
        let accessToken = await getAccessToken();
        let imagePath = process.argv.splice(2)[0];
        let requestData = getPostRequestData(imagePath);
        if (!requestData) return;
        let imageTextData = await getImageTextData(accessToken, requestData);
        console.log(imageTextData);
    } catch (e) {
        console.error("Exception: ", e);
    }
}

exec();
