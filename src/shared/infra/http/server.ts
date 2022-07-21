import "reflect-metadata";
import { NextFunction, Request, Response } from 'express'
import express from 'express'
import "express-async-errors" //this libraries must come after express
import { router } from './routes'


import "../typeorm/"
import "../../container"
import { AppError } from "../../errors/AppError";



const app = express()


app.use(express.json())
app.use(router)


//middleware error

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server errror - ${err.message}`
  })


})



app.listen(3333, () => console.log("Server is running"))