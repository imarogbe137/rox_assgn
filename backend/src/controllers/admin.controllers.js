import { connection } from "../db/db.js";
const userAdd = async (req, res) => {
  //jwt verify here
  try {
    const { email, password, username, roleId, address } = req.body;
    const [result] = await connection.execute(
      "SELECT * FROM users WHERE email=?",
      [email]
    );
    console.log(result.length);

    if (result.length > 0) {
      console.log("user present");
      return res.status(400).json({ error: "user already present" });
    }
    const [insertResult] = await connection.execute(
      "INSERT INTO users (username,email,password,address,roleId) VALUES(?,?,?,?,?)",
      [username, email, password, address, roleId]
    );
    console.log(result);

    if (insertResult.affectedRows === 1) {
      console.log("succesfull insert");
      return res.status(200).json();
    } else {
      console.log("unseccesful insert");
      return res.status(400).json();
    }
  } catch (error) {
    console.log("useradd error " + error.message);
    return res.status(500).json({ error: error.message });
  }
};

const adminAdd = async (req, res) => {};

const adminLogin = async (req, res) => {};

const storeAdd = async (req, res) => {};

const getListingData = async (req, res) => {};

const getUserData = async (req, res) => {};

export { getListingData, getUserData, storeAdd, userAdd, adminLogin, adminAdd };
