import { Router } from "express";
import customerController from "../Controllers/CustomerController";

const router = Router();

export default router;

// ---------------------------------- Customer ----------------------------------
router.post("/create", customerController.createCustomer);
