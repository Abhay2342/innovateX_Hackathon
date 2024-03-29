import db from "../db/conn.mjs";
import bcrypt from "bcrypt";

const GET = async (req, res) => {
    const collection = db.collection("user_details");

    const results = await collection.find().toArray();
    res.send(results);
};

const PATCH = async (req, res) => {
    let uname = req.params.uname;

    let { name, gender, age } = req.body;

    const collection = db.collection("users");

    const existingUser = await collection.findOne({ uname: uname });
    if (!existingUser) {
        res.status(404).send("User not found");
    } else {
        await collection.updateOne(
            { uname: uname },
            { $set: { name: name, email: email, gender: gender, age: age } }
        );
        res.status(200).send("User updated");
    }
};

const UPDATE = async (req, res) => {
    let uname = req.params.uname;
    let { fname, lname, gender, age, about, avatar, apikey } = req.body;

    const collection = db.collection("users");

    const existingUser = await collection.findOne({ uname: uname });
    if (!fname) {
        fname = existingUser.fname;
    }
    if (!age) {
        age = existingUser.age;
    }
    if (!lname) {
        lname = existingUser.lname;
    }
    if (!gender) {
        gender = existingUser.gender;
    }
    if (!about) {
        about = existingUser.about;
    }
    if (!avatar) {
        lname = existingUser.avatar;
    }
    if (!apikey) {
        lname = existingUser.apikey;
    }

    if (!existingUser) {
        res.status(404).send("User not found");
    } else {
        await collection.updateOne(
            { uname: uname },
            {
                $set: {
                    fname: fname,
                    lname: lname,
                    gender: gender,
                    age: age,
                    apikey: apikey,
                    avatar: avatar,
                },
            }
        );
        const newUserData = await collection.findOne({ uname: uname });
        res.status(200).send(newUserData);
    }
};

const PASSWORD = async (req, res) => { };

const DELETE = async (req, res) => {
    let uname = req.params.uname;
    let { password } = req.body;
    console.log(uname, password);

    const collection = db.collection("users");

    try {
        const existingUser = await collection.findOne({ uname: uname });

        if (!existingUser) {
            res.status(404).send("User not found");
            return;
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (passwordMatch) {
            await collection.deleteOne({ uname: uname });
            res.status(200).send("User deleted");
        } else {
            res.status(401).send("Invalid Password");
        }
    } catch (error) {
        console.error("Error during user deletion:", error);
        res.status(500).send("Internal Server Error");
    }
};

const addNews = async (req, res) => {
    let { newsArticle, email } = req.body;

    const collection = db.collection("collection");

    try {
        // Check if the user already exists
        const existingEntry = await collection.findOne({
            email: email,
            collection: newsArticle
        });

        if (existingEntry !== null) {
            await collection.updateOne({ email: email },
                { $pull: { collection: newsArticle } });
        } else {
            await collection.updateOne({ email: email },
                { $push: { collection: newsArticle } });
        }

        // Fetch the updated data
        const newData = await collection.findOne({ email });

        res.status(201).send(newData);
    } catch (error) {
        console.error("Error during addition:", error);
        res.status(500).send("Internal Server Error");
    }
};


const addNotes = async (req, res) => {
    let { selectedArticle, notes, email } = req.body;

    const collection = db.collection("collection");

    try {
        // Check if the user already exists
        const existingEntry = await collection.findOne({
            email: email,
            collection: selectedArticle
        });

            await collection.updateOne({ email: email },
                { $pull: { collection: selectedArticle } });

                selectedArticle["notes"] = notes.notes
            await collection.updateOne({ email: email },
                { $push: { collection: selectedArticle } });

        // Fetch the updated data
        const newData = await collection.findOne({ email });

        res.status(201).send(newData);
    } catch (error) {
        console.error("Error during addition:", error);
        res.status(500).send("Internal Server Error");
    }
};

export default {
    addNews,
    addNotes,
    GET,
    UPDATE,
    PATCH,
    DELETE,
    PASSWORD,
};
