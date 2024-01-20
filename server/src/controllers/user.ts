import { NextFunction, Response, Request } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser = TryCatch(
  async (
    req: Request<{}, {}, NewUserRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { _id, name, email, dob, gender, photo } = req.body;

    let user = await User.findById(_id);

    if (user) {
      return res.status(201).json({
        success: true,
        message: `welcome, ${user.name}`,
      });
    }
    if(!_id || !name || !email || !dob || !gender || !photo)
      return next(new ErrorHandler("Please add all fields" , 400))
    
    user = await User.create({
      name,
      email,
      _id,
      dob: new Date(dob),
      gender,
      photo,
    });

    return res.status(201).json({
      success: true,
      message: user,
    });
  }
);
