
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.util";

const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = <string>req.headers["access-token"]

  if (!accessToken) {
    return next();
  }

  const { data} = verifyJwt(accessToken);

  if (data) {
    res.locals.user = data;
    return next();
  }

  return next();
};

export default verifyUser;