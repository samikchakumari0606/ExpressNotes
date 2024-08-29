const express=require("express");
const app=express();
const path=require("path");//help to access folder of your project
const publicFolderPath=path.join( __dirname,"public");
console.log(publicFolderPath)


//TEMPLATE ENGINE==>HELPS IN MAKING DYNAMIC AND ROUTING PAGES(EJS,HBS)
//view folder==>template engine 
//FIFO
app.set("view engine",'ejs');

// app.get("/profile",(_,res)=>{
//     res.render("profile");
// });

app.get("/profile",(_,res)=>{
    const user={
        myname:"samiksha",
        email:"samiksha@gmail.com",
        city:"Banglore",
        skills:["php","js","c++"]
    }
    res.render("profile",{user});
})

app.get("/login",(_,res)=>{
    res.render("login")
})


// BASIC ROUTING IN EXPRESS
app.get("/",(req,res)=>{
    res.send("Hello this is home page")
});

//res.send() IS USE TO SEND MULTIPLE INPUT DATA AT THE TIME
app.get("/about",(req,res)=>{
    res.write("<h3>Hello this is my about page <h3><button>click here</button>");
    res.send();
})

//GETIING REQUEST FROM USER
app.get("/help",(req,res)=>{
    console.log("Hello this is my help page =====>",req.query.myname)
    res.send("Welcome in help page");
})


//SENDING HTML DATA IN EXPRESS

app.get("/contact",(req,res)=>{
    res.send("<h1>Hello this is contact page</h1>")
})

app.get("/mycontact",(req,res)=>{
    res.send(`
        <h1>Hello this is contact page</h1>
       <a href="/about">this is my about page</a>
       <input type="text" placeholder="user name" value=${req.query.myage} />
        `)
})

//SENDING JSON DATA IN EXPRESS
app.get("/myjson",(req,res)=>{
    res.send([
        {
            myNewName:"anil",
            myNewEmail:"anil@gmail.com"
        },
        {
            myNewName:"samiksha",
            myNewEmail:"samiksha@gmail.com"
        }
    ])
})

//USE TO SHOW (LOAD) STATIC HTML FILE IN BROWSER
//static() use to load static content
// app.use(express.static(publicFolderPath))


//REMOVE AN EXTENSION FROM HOME.HTML

app.get("/myage",(_,res)=>{
    res.sendFile(`${publicFolderPath}/MyAge.html`)
})

app.get("/myhome",(_,res)=>{
    res.sendFile(`${publicFolderPath}/MyHome.html`)
})

//My 404 page
app.get("/*",(_,res)=>{
    res.sendFile(`${publicFolderPath}/My404.html`)
})






app.listen(5000);