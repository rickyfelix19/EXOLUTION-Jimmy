import express from "express";

import { Person } from "../models/personModel.js";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req, res) => {
	try {
		const userId = req.params;
		const records = await Person.find({ userId });
		if (records.length === 0) {
			return res.status(404).send("No records found for the user.");
		}
		res.status(200).send(records);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.get("/", async (req, res) => {
	try {
		const people = await Person.find({});
		return res.status(200).json({
			count: people.length,
			data: people,
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send({ message: err.message });
	}
});

router.post("/", async (req, res) => {
	try {
		const newRecordBody = req.body;
		const newRecord = new Person(newRecordBody);
		const savedRecord = await newRecord.save();

		res.status(200).send(savedRecord);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const newRecordBody = req.body;
		const record = await Person.findByIdAndUpdate(id, newRecordBody);

		if (!record) return res.status(404).send();

		res.status(200).send(record);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const record = await Person.findByIdAndDelete(id);
		if (!record) return res.status(404).send();
		res.status(200).send({ message: "User deleted successfully" });
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

export default router;
