import { Request, Response } from "express";
import { createUser, getAllUsers } from "./user.service";
import { successResponse, errorResponse } from "../../utils/response";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return successResponse(res, user, "User created successfully");
  } catch (err: any) {
    return errorResponse(res, err.message, 400);
  }
};

export const getUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    return successResponse(res, users);
  } catch (err: any) {
    return errorResponse(res, err.message);
  }
};
