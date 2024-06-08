import mongoose from "mongoose";

const transactionModel = mongoose.Schema(
	{
		transactionType: {
			type: "deposit" | "withdraw" | "transfer",
			required: true,
		},
		balance: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);
export const Transaction = mongoose.model("Transaction", transactionModel);
