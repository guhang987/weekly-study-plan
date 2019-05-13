var express =require('express')
var bodyParser = require('body-parser')
var app = express()

//配置body-parser中间件 解析post请求体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//配置模板引擎
app.engine('html',require('express-art-template'))




var mongoose = require('mongoose');

//1.连接你的数据库
mongoose.connect('mongodb://localhost:27017/items4', {useNewUrlParser: true});

//2.设计文档结构
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    zz1:{
        type: String,
        required: true
    },
    zz2:{
        type: String,
        required: true
    },
    zz3:{
        type: String,
        required: true
    },
    yy1:{
        type: String,
        required: true
    },
    yy2:{
        type: String,
        required: true
    },
    yy3:{
        type: String,
        required: true
    },
    sx1:{
        type: String,
        required: true
    },
    sx2:{
        type: String,
        required: true
    },
    sx3:{
        type: String,
        required: true
    },
    zyk1:{
        type: String,
        required: true
    },
    zyk2:{
        type: String,
        required: true
    },
    zyk3:{
        type: String,
        required: true
    }
    
});

// 3.将文档结构发布为模型，
// 第一个参数传入大写名词单数字符串表示数据库名称，系统改成users；第二个参数传入架构
var Student = mongoose.model('Student',studentSchema)

// {
//     zz1:'zz1',
//     zz2:'zz2',
//     zz3:'zz3',
//     sx1:'sx1',
//     sx2:'sx2',
//     sx3:'sx3',
//     yy1:'yy1',
//     yy2:'yy2',
//     yy3:'yy3',
//     zyk1:'zyk1',
//     zyk2:'zyk3',
//     zyk3:'zyk3',
//     name:'古航'

// },
app.get('/',function(req,res){
   
    Student.find(function(err,ret){
        if(err){
            return console.log(err)
        }else
        {
            
            res.render('index.html',{
                items:ret
            }
           
            
            )
            
        }
    })

 
})
app.get('/new',function(req,res){
 
    res.render('new.html')
})
app.post('/new',function(req,res){
    console.log(req.body)

    var admin = new Student({
        name:req.body.name,
        zz1:req.body.zz1,
        zz2:req.body.zz2,
        zz3:req.body.zz3,
        yy1:req.body.yy1,
        yy2:req.body.yy2,
        yy3:req.body.yy3,
        sx1:req.body.sx1,
        sx2:req.body.sx2,
        sx3:req.body.sx3,
        zyk1:req.body.zyk1,
        zyk2:req.body.zyk2,
        zyk3:req.body.zyk3,
    })
    admin.save(function(err,ret){
        if(err){
            console.log(err)
        }else{
            console.log('保存成功')
        }
    })
    res.redirect('/')

})

app.listen(80,function(){
    console.log('running')

})
