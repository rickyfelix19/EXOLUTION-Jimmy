import mongoose from "mongoose";

const personSchema = mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		balance: {
			type: Number,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		account: {
			type: Number,
			required: true,
		},
		password: {
			type: String,
		},
		history: [], // ref ID instead of data
	},
	{
		timestamps: true,
	}
);
export const Person = mongoose.model("Person", personSchema);
