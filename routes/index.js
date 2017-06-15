"use strict";
const express = require('express')
// ルーティングを行うためのモジュール
const router = express.Router()
/* GET home page. */
router.get('/', (req, res, next)=> {
  // テンプレートファイルを使ってHTMLファイルを返す
  connection.query('SELECT * FROM posts;', (err, results, fields)=>{
    if(err)
      return next(new Error())
    else
      return res.render('index', {'posts': results})
  })
})

router.post('/post', (req, res, next)=>{

  if(!req.body.text)
    return next(new Error())
  else
    connection.query('INSERT INTO posts (text, name) values (?, ?)', [req.body.text, req.body.name], (err, results, fields)=>{
      if(err)
        return next(new Error())
      else if(results)
        return res.redirect('/')
      else
        return next(new Error())
    })
})
// require構文を使って外部から読み込みたい時にこれを設定
module.exports = router
