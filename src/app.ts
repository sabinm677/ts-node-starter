import dotenv from "dotenv";
import express from "express";
import path from "path";


// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// start the express server
// app.listen( port, () => {
    // // tslint:disable-next-line:no-console
    // console.log( `server started at http://localhost:${ port }` );
// } );


export default app;

