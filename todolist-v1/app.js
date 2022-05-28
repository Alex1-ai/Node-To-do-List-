

const express = require("express");
const bodyParser = require("body-parser");



const app = express();

// making a template in node
app.set('view engine', 'ejs');

// getting users input from form you need to set this
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
const date = require(__dirname+"/date.js")
let day = date.getDate();
//  

let item = [];
let workList = [];
app.get("/", function(req,res){
  
    // let currentDay = today.getDay()
    // let day = ""
    // if(currentDay===0){
    //     // res.send('<h1>Yay it is weekend</h1>')
    //     day = "Sunday";
    //     // res.sendFile(__dirname,'/weekend.html');
    
    // }else if( currentDay===1){
    //     // sending multiple message use res.write
    //     // res.write("<h2>Boo! I have to work!</h2>")
    //     // res.write("<h1>It is not the weekend.</h1>")
    //     // res.send();

    //     // res.sendFile(__dirname+'/index.html')
      
        
    //     // res.sendFile(__dirname+'/weekday.html')
    
    //     // using template in node
    //     day = "Monday"
        
    
    // }else if(currentDay === 2){
    //     day = 'Tuesday'

    // }else if(currentDay === 3){
    //     day = 'Wednesday'
    // }else if(currentDay === 4){
    //     day = "Thursday"
    // }else if(currentDay === 5){
    //     day = "Friday"
    // }else if(currentDay===6) {
    //     day = "Saturday"
    // }else{
    //     console.log("Error current day is equal to: "+currentDay);
    // }
    // console.log(day)


   

    res.render('list2',{listTitle: day,newListItem:item})
})

app.post("/" , function(req,res){
    // console.log(req.body)
    let userInput =  req.body.newItem;
    if (req.body.list === "Work"){
        workList.push(userInput)
        res.redirect("/work")
    }else{
      item.push(userInput)

      res.redirect("/")
    }
    

})


app.get("/work", function(req,res){
    res.render("list2",{listTitle:"Work List",newListItem:workList})
})

// app.post("/work", function(req,res){
//     let userInput = req.body.newItem;
//     workList.push(userInput);
//     res.redirect("/work")
// })


app.get("/about", function(req,res){
    res.render("about")
})
app.listen(3000, function(){
    console.log("Server stated on port 3000")
})