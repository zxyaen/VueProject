const express =require( 'express')
const app =express()

app.use(express.static(__dirname+'/static'))

app.get('/person',(req,res)=>{
    res.send({
        name:'tom',
        age:12
    })
})




app.listen(5005,(err)=>{
    if (err) {
        console.log(err.message);
    }else{
        console.log('app is running');
    }
})