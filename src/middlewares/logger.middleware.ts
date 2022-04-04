import { Request, Response } from "express";

export function logger(req:Request,res:Response,next:()=>void){
    console.log(req.ip);
    console.log(req.body);
    next();
}