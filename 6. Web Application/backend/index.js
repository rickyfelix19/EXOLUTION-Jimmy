import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { PORT, mongoDBURL } from "./config.js";

import { Person } from "./models/personModel.js";
import financialRoutes from "./routes/financialRoutes.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policies (by default accepts all)
app.use(cors());

// Middleware for handling custom CORS policies
// app.use(
// 	cors({
// 		origin: "https://www.localhost:3001",
// 		methods: ["GET", "POST", "PUT", "DELETE"],
// 		allowedHeaders: ["Content-Type"],
// 	})
// );

// test endpoint
app.get("/", (req, res) => {
	console.log(req);
	return res.status(234).send("Welcome to MERN Stack Tutorial");
});

// endpoints
app.use("/people", financialRoutes);

// // app.listen(PORT, () => {
// // 	console.log(`listening on port: ${PORT}`);
// // });

// check for connection
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
