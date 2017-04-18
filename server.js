
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const app = express();
const upload =multer({ dest: 'uploads/'});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
//home page

app.post("/uploads", upload.single('fileToUpload'), function (req, res){
    
  var size= {'size': req.file.size};
res.json(size);    

})

app.listen(process.env.PORT || 3000, function(){
    console.log ('server runs');
});