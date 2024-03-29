import db from "../db/conn.mjs";

const support = async (req, res) => {
    let { name, email, desc } = req.body;

    const collection = db.collection("support");

    try {
        // Check if the user already exists

        // Hash the password before storing it

        // Insert the new user with the hashed password
        await collection.insertOne({ name, email, desc });

        res.status(201).send("Ticket Created");
    } catch (error) {
        console.error("Error during creating ticket:", error);
        res.status(500).send("Internal Server Error");
    }
};

export default support;
