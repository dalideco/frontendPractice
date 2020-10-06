module.exports={
    entry: "./src/js/app.js",
    output: {
        path: __dirname+ "/dist",
        filename :"main.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/ 
            },
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"sass-loader"}
                ]
            },
            {
                test:/\.jpg$/,
                exclude:/node_modules/,
                loader:"url-loader"
            },
            {
                test:/\.png$/,
                exclude:/node_modules/,
                loader:"url-loader"
            }
        ]
    }
}