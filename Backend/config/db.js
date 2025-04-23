import mongoose from "mongoose";
export const connectDB = async () => {
  console.log(process.env.MONGO_URI)
  await mongoose

    .connect(
      // project name--> FinalYearProject in mongodb atlas and the cluster-> FoodOrder, database-> foodorderdb, collection->foods
      process.env.MONGO_URI
    )
    .then(() => {
      console.log("DB Connected.");
    })
    .catch((err) => {
      console.log("An error occured!"); //! use any one of them
      console.error(err);
    });
};
