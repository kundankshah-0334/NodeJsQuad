import express from "express";
// import { getuser } from "../controller/user_controller.js";
// import { getUser } from "../../frontend/src/service/api";
import { getuser } from "../controller/DataController.js";
// import { editUser , deleteUser } from "../controller/user_controller.js";
const route = express.Router();

route.get("/all" , getuser);

export default route;