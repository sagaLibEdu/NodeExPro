import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import fs from 'fs';
import mongoDB from 'mongodb';
import mongoose from 'mongoose';

import userRoutes from './routes/user.js';
import storyRoutes from './routes/story.js'

const app=express()
const PORT = 5000;

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My apis in swagger",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ["./routes/*.js"],
};
const swaggerSpecs = await swaggerJSDoc(options);

console.log("_________swaggerSpecs______");
console.log(swaggerSpecs);

const {MongoClient} = mongoDB;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
})

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connect("....",
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Succesfully Connected")
})
.catch((err)=>{
    console.log(err)
});


  app.use('/users',userRoutes);
  app.use('/story',storyRoutes);
  // app.use(swagger.express(
  //   {
  //     definition: {
  //       schemes: ['http', 'https'],
  //       info: {
  //         title: "Axia Api Docs",
  //         version: "1.0"
  //       },
  //       securityDefinitions: {
  //         language: {
  //           type: SwaggerDefinitionConstant.Security.Type.API_KEY,
  //           in: SwaggerDefinitionConstant.Security.In.HEADER,
  //           name: "language"
  //         },
  //         basicAuth: {
  //           type: SwaggerDefinitionConstant.Security.Type.BASIC_AUTHENTICATION
  //         }
  //       }
  //     }
  //   }
  // ));

  app.use('/api-docsin', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  app.use('/api/v1', userRoutes);


app.listen(PORT,()=>console.log("server is running"));
// "test": "echo \"Error: no test specified\" && exit 1"

