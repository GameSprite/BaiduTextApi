/****************************************************
 * 使用BaiduTextAPI的配置信息
 * Edit by : ChenGuanzhou (1668831812@qq.com)
 * Create at : 2019-08-06 20:19:49
 *****************************************************/

/*ID,KEY的配置信息*/
var INFO_CONFIG = {
    ID: "14348843",
    API_KEY: "wc68dHtiY9mwuD7980EXr1I2",
    SECRET_KEY: "dCaMG095LvB9pdtRqbn5eWP4RFSLnj74"
};
/*URL的配置*/
var URL_CONFIG = {
    //用于获取ACCESS_TOKEN, POST请求
    ACCESS_TOKEN_URL:
        "https://aip.baidubce.com/oauth/2.0/token?" +
        `grant_type=client_credentials&client_id=${INFO_CONFIG.API_KEY}&client_secret=${
            INFO_CONFIG.SECRET_KEY
        }`,
    //通用文字识别（含位置高精度版
    // URL参数：
    // access_token	调用AccessToken模块获取
    // Headers参数
    // 参数：Content-Type，值：application/x-www-form-urlencoded
    // Body请求参数：
    // 参数：image，是否必选：和url二选一，类型：string，可选值范围：null
    // 说明：图像数据，base64编码后进行urlencode，要求base64编码和urlencode后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
    // 参数：recognize_granularity，是否必选：false，类型：string，可选值范围：[big、small]
    // 说明：是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
    // 参数：detect_direction，是否必选：false， 类型：string，可选值范围：[true、false]
    // 说明：是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括: - true：检测朝向； - false：不检测朝向。
    // 参数：vertexes_location，是否必选：FALSE，类型：string，可选值范围：[true、false]
    // 说明：是否返回文字外接多边形顶点位置，不支持单字位置。默认为false
    // 参数：probability，是否必选：false， 类型：string，可选值范围：[true、false]
    // 说明：是否返回识别结果中每一行的置信度
    //-------------------------------------------------------------------------
    // 返回说明
    // 字段：direction，是否必选：否 类型：int32
    // 说明：图像方向，当detect_direction=true时存在。-1:未定义，-0:正向，-1:逆时针90度，-2:逆时针180度， -3:逆时针270度
    // 字段：log_id，是否必选：是 类型：uint64，
    // 说明：唯一的log id，用于问题定位
    // 字段：words_result，是否必选：是	类型：array()
    // 说明：定位和识别结果数组
    // 字段：words_result_num，是否必选：是	类型：uint32
    // 说明：识别结果数，表示words_result的元素个数
    // 字段：+vertexes_location，是否必选：否 类型：array()
    // 说明：当前为四个顶点: 左上，右上，右下，左下。当vertexes_location=true时存在
    // 字段：x，是否必选：是 类型：uint32
    // 说明：水平坐标（坐标0点为左上角）
    // 字段：y，是否必选：是 类型：uint32
    // 说明：垂直坐标（坐标0点为左上角）
    // 字段：location，是否必选：是 类型：array()
    // 说明：位置数组（坐标0点为左上角
    // 字段：left，是否必选：是 类型：uint32
    // 说明：表示定位位置的长方形左上顶点的水平坐标
    // 字段：top，是否必选：是 类型：uint32
    // 说明：表示定位位置的长方形左上顶点的垂直坐标
    // 字段：width，是否必选：是 类型：uint32
    // 说明：表示定位位置的长方形的宽度
    // 字段：height, 是否必选：是 类型：uint32
    // 说明：表示定位位置的长方形的高度
    // 字段：words，是否必选：否 类型：string
    // 说明：识别结果字符串
    // 字段：chars，是否必选：否 类型：array(),
    // 说明：单字符结果，recognize_granularity=small时存在
    // 字段：location，是否必选：是	类型：array()
    // 说明：位置数组（坐标0点为左上角）
    // 字段：left，是否必选：是 类型：uint32
    // 说明：表示定位位置的长方形左上顶点的水平坐标
    // 字段：top，是否必选：是 类型：uint32，
    // 说明：表示定位位置的长方形左上顶点的垂直坐标
    // 字段：width，是否必选：是 类型：uint32
    // 说明：表示定位定位位置的长方形的宽度
    // 字段：height，是否必选：是 类型：uint32
    // 说明：表示位置的长方形的高度
    // 字段：char，是否必选：是	类型：string
    // 说明：单字符识别结果
    // 字段：probability，是否必选：否 类型：object
    // 说明：识别结果中每一行的置信度值，包含average：行置信度平均值，variance：行置信度方差，min：行置信度最小值
    ACCURATE: "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate"
};

exports.INFO_CONFIG = INFO_CONFIG;
exports.URL_CONFIG = URL_CONFIG;
