import mongoose from "mongoose";

const personSchema = mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		paymentMethod: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
export const Person = mongoose.model("Person", personSchema);
