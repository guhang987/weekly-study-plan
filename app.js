var express =require('express')
var bodyParser = require('body-parser')
var app = express()

//配置body-parser中间件 解析post请求体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/views/',express.static('./views/'))


//配置模板引擎
app.engine('html',require('express-art-template'))




var mongoose = require('mongoose');

//1.连接你的数据库
mongoose.connect('mongodb://localhost:27017/week5', {useNewUrlParser: true});

//2.设计文档结构
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    html:{
        type: String,
        required:true
    },
	pro:{
        type: String,
        required:true
    },
	pronum:{
	type:Number
	},
	sub1:{
	type:String
	},
	sub2:{
	type:String
	},
	sub3:{
	type:String
	},
	sub4:{
	type:String
	}
});//sub1-4科目名称

// 3.将文档结构发布为模型，
// 第一个参数传入大写名词单数字符串表示数据库名称，系统改成users；第二个参数传入架构
var Student = mongoose.model('Student',studentSchema)

app.get('/',function(req,res){
   
    Student.find({}).sort({"pronum":-1}).exec(function(err,ret){
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

app.post('/',function(req,res){
	Student.find({"name":req.body.name+""},function(err,ret){
})
    Student.findOneAndUpdate({
        "name":req.body.name.replace(/\s*/g,"")
    },{
        name:req.body.name.replace(/\s*/g,""),
        html:req.body.data.toString(),
	pro:req.body.pro,
	pronum:parseInt(req.body.pronum)
    },function(err,ret){
        if(err){
            return console.log(err)
        }else{
	
        }
    })
})

app.get('/about',function(req,res){
	res.render('about.html')
})
app.get('/new',function(req,res){
 
    res.render('new.html')
})
app.post('/new',function(req,res){
    var html=""
	 if(req.body.zz5){
        html += " <td><p>1、"+req.body.zz1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.zz2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.zz3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>4、"+req.body.zz4+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>5、"+req.body.zz5+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }
 else if(req.body.zz4){
        html += " <td><p>1、"+req.body.zz1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.zz2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.zz3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>4、"+req.body.zz4+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }
   else if(req.body.zz3){
        html += " <td><p>1、"+req.body.zz1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.zz2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.zz3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else if(req.body.zz2){
        html +=" <td><p>1、"+req.body.zz1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.zz2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else if(req.body.zz1){
        html +=" <td><p>1、"+req.body.zz1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else{
	html += "<td> </td>"
}


 if(req.body.yy5){
        html += " <td><p>1、"+req.body.yy1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.yy2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.yy3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>4、"+req.body.yy4+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>5、"+req.body.yy5+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }
 else if(req.body.yy4){
        html += " <td><p>1、"+req.body.yy1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.yy2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.yy3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>4、"+req.body.yy4+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }
    else if(req.body.yy3){
        html += " <td><p>1、"+req.body.yy1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.yy2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.yy3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else if(req.body.yy2){
        html +=" <td><p>1、"+req.body.yy1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.yy2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else if(req.body.yy1){
        html +=" <td><p>1、"+req.body.yy1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else{
	html += "<td> </td>"
}
	 if(req.body.sx5){
        html += " <td><p>1、"+req.body.sx1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.sx2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.sx3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>4、"+req.body.sx4+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>5、"+req.body.sx5+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }
 else if(req.body.sx4){
        html += " <td><p>1、"+req.body.sx1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.sx2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.sx3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>4、"+req.body.sx4+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }
    else if(req.body.sx3){
        html += " <td><p>1、"+req.body.sx1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.sx2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.sx3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else if(req.body.sx2){
        html +=" <td><p>1、"+req.body.sx1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.sx2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else if(req.body.sx1){
        html +=" <td><p>1、"+req.body.sx1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else{
	html += "<td> </td>"
}

 if(req.body.zyk5){
        html += " <td><p>1、"+req.body.zyk1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.zyk2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.zyk3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>4、"+req.body.zyk4+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>5、"+req.body.zyk5+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }
 else if(req.body.zyk4){
        html += " <td><p>1、"+req.body.zyk1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.zyk2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.zyk3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>4、"+req.body.zyk4+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }
    else if(req.body.zyk3){
        html += " <td><p>1、"+req.body.zyk1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.zyk2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>3、"+req.body.zyk3+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else if(req.body.zyk2){
        html +=" <td><p>1、"+req.body.zyk1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p><p>2、"+req.body.zyk2+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else if(req.body.zyk1){
        html +=" <td><p>1、"+req.body.zyk1+"&nbsp;<input onclick=\"checkboxOnclick(this)\"  type=\"checkbox\" ></p></td>"
    }else{
	html += "<td> </td>"
}

	if(req.body.name=="张可"){
 var admin = new Student({
        name:req.body.name,
        sub1:"英语",
        sub2:"数学",
        sub3:"逻辑写作",
        pronum:0,
        html:html,//html是要渲染的html表格字段
        pro:"<div class=\"progress-bar progresss-bar-danger rogress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"0\"aria-valuemin=\"0\" aria-valuemax=\"100\" id=\"pro\" style=\"min-width: 2em;\">0%</div>"
         })
		
	}else{

    var admin = new Student({
        name:req.body.name,
	sub1:"政治",
	sub2:"英语",
	sub3:"数学",
	sub4:"专业课",
	pronum:0,
        html:html,//html是要渲染的html表格字段 
   	pro:"<div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"0\"aria-valuemin=\"0\" aria-valuemax=\"100\" id=\"pro\" style=\"min-width: 2em;\">0%</div>" 
	 })
}
    admin.save(function(err,ret){
        if(err){
            console.log(err)
        }else{
            //console.log('保存成功',ret)
        }
    })
    res.redirect('/')

})

app.listen(80,function(){
    console.log('running')

})
