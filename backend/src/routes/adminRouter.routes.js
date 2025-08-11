import { Router } from "express";
import {
  adminAdd,
  adminLogin,
  getListingData,
  storeAdd,
  userAdd,
} from "../controllers/admin.controllers.js";

const router = Router();

router.route("/store-add").post(storeAdd);
router.route("/user-add").post(userAdd);
router.route("/admin-add").post(adminAdd);
router.route("/login").post(adminLogin);
router.route("/login").get(getListingData);

export default router;
