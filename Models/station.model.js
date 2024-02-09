const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
	station_id: { type: Number, required: true },
	station_name: { type: String, required: true },
	longitude: { type: Number, required: true },
	latitude: { type: Number, required: true },
});

stationSchema.set("toJSON", {
	transform: (doc, ret) => {
		//  ret.id = ret._id;
		delete ret._id;
		delete ret.__v;
		return ret;
	},
});

const Station = mongoose.model("Station", stationSchema);

module.exports = { Station };
