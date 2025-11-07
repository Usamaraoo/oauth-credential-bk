import { NextFunction, Request, Response } from "express";
import prisma from "../../../config/prisma";
import { GoogleUser } from "../../user/user.model";
import { getGoogleAuthURL, getGoogleUser } from "./auth..google.service";



export const googleAuth = (req: Request, res: Response) => {
  const url = getGoogleAuthURL();
  return res.redirect(url);
};


// function
export const googleCallback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const code = req.query.code as string;
    const googleUser = await getGoogleUser(code) as GoogleUser;
    console.log("googleUser", googleUser)
    // Upsert user in DB
    const user = await prisma.user.upsert({
      where: { email: googleUser.email },
      update: { name: googleUser.name },
      create: {
        name: googleUser.name,
        email: googleUser.email,
        password: 'fwfe'
      },
    });

    res.json({ success: true, user });
  } catch (error) {
    next(error);
  }
};