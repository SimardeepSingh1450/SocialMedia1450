const express=require('express')
const app=express()


const cors=require('cors')
app.use(cors());
app.use(express.json());


const userRoute=require('./routes/User')
app.use('/user',userRoute)

const uploadRoute=require('./routes/Upload')
app.use('/upload',uploadRoute)

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});