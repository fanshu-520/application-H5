module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
                "last 10 versions" // 所有主流浏览器最近10版本用
            ],
            grid: true
        },
        "postcss-pxtorem": {
            // 数字|函数）表示根元素字体大小或根据input参数返回根元素字体大小
            rootValue: 37.5,
            // 使用通配符*启用所有属性
            propList: ["*"],
            // 允许在媒体查询中转换px
            mediaQuery: true,
            // 过滤掉.norem-开头的class，不进行rem转换
            selectorBlackList: [".md"],
            unitPrecision: 5
        }
    }
}