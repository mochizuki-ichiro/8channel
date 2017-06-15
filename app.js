"use strict";
// httpを利用するためのモジュール
const http = require('http')
const express = require('express')
const logger = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: '8chan'
})


connection.connect(function(err) {
  if (err) {
    return console.error('error connecting: ' + err.stack);
  }else{
    console.log('connected as id ' + connection.threadId);
  }                                                                                                                                               })

global.connection = connection

// ルーティングファイルを読み込む
const index = require('./routes/index')

// jsonをサポート
app.use(bodyParser.json())
// x-www-form-urlencodedをサポート
app.use(bodyParser.urlencoded({ extended: false }))
// テンプレートファイルを配置したディレクトリを指定
app.set('views', `${__dirname}/views`)
// テンプレートファイルの形式としてejsを指定
app.set('view engine', 'ejs')
// ログを取得
app.use(logger())
// デフォルトのルーティングとしてindexを指定
app.use('/', index)

// 404用ページを表示
app.use((req, res, next)=>{
  res.status('404')
  return res.render('error',{message: "404 Not Found"})
})
// サーバーを定義、Expressを利用する
const server = http.createServer(app)
// ３０００番ポートでリクエストを待ち受ける
server.listen('3000')
