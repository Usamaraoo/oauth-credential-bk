import { NextFunction, Request, Response } from "express";
import { findUserByEmail } from "./auth.service";
import { errorResponse, successResponse } from "../../utils/response";

export const loginHandler = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user = await findUserByEmail(email);
        if (!user) return errorResponse(res, "User not found", 404);
        return successResponse(res, user, "Login success");
    } catch (err: any) {
        return errorResponse(res, err.message);
    }
};