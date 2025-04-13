import { Request, Response } from "express";
import jwt from "jsonwebtoken";

//! Add all functions to the export default {} section at the bottom

const createCustomer = (req: Request, res: Response) => {
    let token = jwt.sign(req.body, `${process.env.PRIVATE_TOKEN}`, {
        expiresIn: "1h",
    });

    res.cookie("token", token, {
        maxAge: 3600000,
        httpOnly: true,
    });

    res.json(req.body);
};

export default { createCustomer };
