"use strict";
const express = require('express')
// ルーティングを行うためのモジュール
const router = express.Router()
/* GET home page. */
router.get('/', (req, res, next)=> {
  // テンプレートファイルを使ってHTMLファイルを返す
  return res.render('index')
})
// require構文を使って外部から読み込みたい時にこれを設定
module.exports = router
