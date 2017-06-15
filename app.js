"use strict";
// httpを利用するためのモジュール
const http = require('http')
const express = require('express')
const app = express()

// ルーティングファイルを読み込む
const index = require('./routes/index')

// テンプレートファイルを配置したディレクトリを指定
app.set('views', `${__dirname}/views`)
// テンプレートファイルの形式としてejsを指定
app.set('view engine', 'ejs')

// デフォルトのルーティングとしてindexを指定
app.use('/', index)
// サーバーを定義、Expressを利用する
const server = http.createServer(app)
// ３０００番ポートでリクエストを待ち受ける
server.listen('3000')
