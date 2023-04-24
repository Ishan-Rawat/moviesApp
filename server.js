//for notes on this part read some_notes.txt

import express from "express";
import cors from cors; 
/* to import this stuff we need to run npm install express and npm install cors on our PC. This will then create a node_modules directory. 
* from what i've read and seen, we should not add this directory to our public github repo and we should mention this directory in a 
* .gitignore file in the root directory.*/
import reviews from "./api/reviews.route.js" //We will create this file ourselves later on.

const app = express();

app.use(cors()) // This line allows us to use middleware. Middleware are basically some programs that express uses to change how things work.
app.use(express.json()) // This will allow our server to use JSON in the body of a request.

//now we will specify some initial routes. Initial route is just the URL that we access to send and recieve information.
//(this stops making sense from the next line)
app.use("/api/v1/reviews", reviews); //Two things to note in this line
//First, in the url: "/api/v1/reviews", v1 stands for version 1. We are designing our file structure this way because in bigger projects there can be multiple versions of APIs. So we need to account from that from the start.
//second, The secound argument: reviews, specifies that the route for this URL(1st arg) will be acquired from reviews(line 6 import).

//next we will create a backup route, that will be used in case a URL is not found in the route.js file
app.use("*", (req, res) => {
    res.status(404).json({error: "not found"})
});

//next we will export our app as a module
export default app;
//This will allow us to import app in the file that acts as the database, which we will run to get the server running.