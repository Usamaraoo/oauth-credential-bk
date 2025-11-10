import { NextFunction, Request, Response } from "express";
import prisma from "../../../config/prisma";
import { GoogleUser } from "../../user/user.model";
import { authenticateGoogleUser, getGoogleAuthURL, getGoogleUser } from "./auth..google.service";



export const googleAuth = (req: Request, res: Response) => {
  const url = getGoogleAuthURL();
  return res.redirect(url);
};


// function
export const googleCallback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const code = req.query.code as string;
    const googleUser = await getGoogleUser(code) as GoogleUser;
    await authenticateGoogleUser(googleUser.email, googleUser.name);

  } catch (error) {
    next(error);
  }
};