import { Router } from "expresss";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

export { router };
