//Importing the package 'express', and then initialising it in the variable 'app' which let's you handle requests

const express = require('express');
const app = express();

const port = 3000;

var items = [

//... Enter some test items here in json format

{"id":"1", "item":"gold"},
{"id":"2", "item":"silver"},
{"id":"3", "item":"bronze"}
];

//Serve a GET Request for url '/all' and '/:id'
//The arrow function here controls what gets sent when the request is made

app.get('/all', (req, res) => res.send(items));


// 'id' here acts as a URL parameter
// Another way to handle the function is through unnamed functions as shown below

app.get('/item/:id', function(req, res){

//Implement searching for ID and send

const id = req.params.id;

for(let item of items){
if(item.id===id){
res.json(item);
return;

}
}
res.status(404).send('Item not found');

});


//Serve POST Requests

//You can also define a separate function and call that later, as long as the function parameters match

function addItem(req, res){

//Implement adding item here

const item = req.body;
	
console.log(item);
items.push(item);	
}

app.post('/additem', addItem);

function editItem(req, res){

//Implement editing an item here

const id=req.params.id;
const newItem=req.body;

for(let i=0; i<items.length; i++){
let item=items[i];
if(item.id===id){
items[i]=newItem;
}
}

res.send('Item is edited');
}

app.put('/edititem/:id', editItem);


//This is what runs your backend server on localhost:portnumber the portnumber can be anything, the callback arrow function notifies you about the server being up

app.listen(port, () => console.log(`Listening at port ${port}`));
