import db from "../db/conn.mjs";

const addJobs = async (req, res) => {
    const collection = db.collection("jobs");
    try {
        const data = req.body;
        await collection.insertOne(data);
        res.status(200).json("data added successfully");
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export default addJobs;
