import db from "../db/conn.mjs";
import bcrypt from 'bcrypt';

const signup = async (req, res) => {
    let { uname, fname, lname, email, password } = req.body;

    const collection = db.collection("users");
    const likedArticles = db.collection("collection")

    try {
        // Check if the user already exists
        const existingUser = await collection.findOne({ email });

        if (existingUser) {
            res.status(400).send("User already exists");
            return;
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user with the hashed password
        await collection.insertOne({ uname, 
            fname, 
            lname, 
            email, 
            password: hashedPassword, 
            gender: null, 
            age: null, 
            about: null,
            apikey: null, 
            avatar: null });

            await likedArticles.insertOne({ email,
            collection: []
            });

        res.status(201).send("User created");
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).send("Internal Server Error");
    }
};

export default signup;
