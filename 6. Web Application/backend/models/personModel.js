import mongoose from "mongoose";

const personSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		balance: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
export const Person = mongoose.model("Person", personSchema);
