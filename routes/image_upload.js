var express = require('express');
var router = express.Router();
const Clarifai = require('clarifai');


const app = new Clarifai.App({
    apiKey: '5fdd916715f34b26ab5345b1e709c5cd'
});

router.get('/', function (req, res, next) {
    app.models.predict(Clarifai.GENERAL_MODEL, 'https://images-na.ssl-images-amazon.com/images/I/71%2Bj8wbkNWL._SL1500_.jpg').then(
        function(response) {
            var jsonData = JSON.parse(JSON.stringify(response));
            var conceptsArray = jsonData.outputs[0].data.concepts;
            var tagArray = [];
            for(var i=0;i<conceptsArray.length;i++){
                tagArray.push(conceptsArray[i].name);
            }
            res.send(tagArray)


        },
        function(err) {
            console.error(err);
        }
    );
})



module.exports = router;