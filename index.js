// for this part we need to run npm install dotenv and npm install mongodb in our terminal
import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"
/* DAO here stands for Data Access Object. This is a common pattern for writing programs that use databases.
* The data access object pattern separates a data access client interface from its data access mechanisms.
* It adapts a specific data resources access API to a generic client interface. 
*/

const MongoClient = mongodb.MongoClient; //This allows us to use some finctionality of the mongoDB JS library to make it easier to work with the database.

const mongo_username = process.env['MONGO_USERNAME'];
const mongo_password = process.env['MONGO_PASSWORD'];
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.8qmorth.mongodb.net/?retryWrites=true&w=majority`

const port = 8000 //This is the port we will run the server on.
