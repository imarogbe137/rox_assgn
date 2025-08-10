import { Router } from "express";

const router = Router();

router.route.post("/store-add", storeAdd);
router.route.post("/user-add", userAdd);
router.route.post("/admin-add", adminAdd);
router.route.post("login", adminLogin);

export { router };
