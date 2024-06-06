import express from "express";
import cors from "cors";

import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Person } from "./models/personModel.js";
import personRoute from "./routes/personRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policies (by default accepts all)
// // app.use(cors());

// Middleware for handling custom CORS policies
app.use(
	cors({
		origin: "https://www.localhost:5555",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type"],
	})
);

app.get("/", (req, res) => {
	console.log(req);
	return res.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/people", personRoute);

// // app.listen(PORT, () => {
// // 	console.log(`listening on port: ${PORT}`);
// // });

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log(`App connected successfully`);
		app.listen(PORT, () => {
			console.log(`listening on port: ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
