import db from "../db/conn.mjs";

const jobs = async (req, res) => {
    const { company, location, skills, position } = req.body;
    const collection = db.collection("jobs");

    try {
        let query = {};

        // Check if company or position is provided, and construct the query accordingly
        if ( company && position && location && skills ) {
            query = { $or: [{ company: company }, { position: position }, { location: location}, { skills } ] };
        } else if (company) {
            query = { company: company };
        } else if (position) {
            query = { position: position };
        } else if (location) {
            query = { location: location };
        } else if (skills) {
            query = { skills: skills };
        }   

        // Fetch data based on the constructed query
        const data = await collection.find(query).toArray();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export default jobs;
