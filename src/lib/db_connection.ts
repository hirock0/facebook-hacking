import mongoose from "mongoose";

export const DBConnection = async () => {
    try {

        const dbconnect = await mongoose.connect(process.env.MONGODB_URI!)
        if (dbconnect) {
            console.log("DB conected successfully")
        }

    } catch (error) {
        throw new Error(String(error))

    }
}