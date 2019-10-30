import mongoose from 'mongoose'

export type BusModel = mongoose.Document & {
    tokenUri: string,
    name: string,
    description: string,
    price: number,
    iconUrl: string,
    busPos: string
};

const busSchema = new mongoose.Schema({
    tokenUri: {
        type: String,
        unique: true,
    },
    name: String,
    description: String,
    price: Number,
    iconUrl: String,
    busPos: String
});

const Bus = mongoose.model<BusModel>('Bus', busSchema);

export default Bus;
