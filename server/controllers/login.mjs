import db from "../db/conn.mjs";
import bcrypt from 'bcrypt';

const login = async (req, res) => {
    const { email, password } = req.body;

    const collection = db.collection("users");
    const newsCollection = db.collection("collection");

    try {
        const user = await collection.findOne({ email });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const newsData = await newsCollection.findOne({ email });
                res.status(200).send([user, newsData]);
            } else {
                res.status(401).send("Invalid Credentials!");
            }
        } else {
            res.status(401).send("Invalid Credentials!");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error");
    }
};

export default login;
