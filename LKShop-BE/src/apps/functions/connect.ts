import mongoose from "mongoose";
const myDB = mongoose.connection.useDb('KenStore');
export default myDB
