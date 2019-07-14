// src 是前端页面  server是后台接口

const express = require('express')
const mongoose = require('mongoose')

// const
// 新建app
const app = express()
app.get('/', function (req, res) {
  res.end('<h1>hello world</h1>')
})
app.get('/data',function(req,res){
  res.json({name:'imooc hello ',type:'It'})
})
app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
