import express from "express";
import { Person } from "../models/personModel.js";

const router = express.Router();

// save a new person name
router.post("/", async (req, res) => {
	try {
		if (!req.body.firstName || !req.body.lastName || !req.body.balance) {
			return res.status(400).send({
				message: "Send all required fields: firstName, lastName, balance",
			});
		}
		const newPerson = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			balance: req.body.balance,
		};

		const person = await Person.create(newPerson);
		return res.status(201).send(person);
	} catch (err) {
		console.error(err.message);
		res.status(500).send({ message: err.message });
	}
});

// get all name
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

// get one person
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const person = await Person.findById(id);
		return res.status(200).json(person);
	} catch (err) {
		console.log(err.message);
		res.status(500).send({ message: err.message });
	}
});

// update person
router.put("/:id", async (req, res) => {
	try {
		if (!req.body.firstName || !req.body.lastName || !req.body.balance) {
			return res.status(400).send({
				message: "Send all required fields: firstName, lastName, balance",
			});
		}
		const { id } = req.params;
		const result = await Person.findByIdAndUpdate(id, req.body);

		if (!result) {
			return res.status(404).json({ message: "Person not found" });
		}
		return res.status(200).send({ message: "Person updated successfully" });
	} catch (err) {
		console.log(err.message);
		res.status(500).send({ message: err.message });
	}
});

// delete
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const result = await Person.findByIdAndDelete(id);
		if (!result) {
			return res.status(404).json({ message: "Person not found" });
		}
		return res.status(200).send({ message: "Person deleted successfully" });
	} catch (err) {
		console.log(err.message);
		res.status(500).send({ message: err.message });
	}
});

export default router;
