import mongoose from "mongoose";
import "dotenv/config";
main()
  .then(() => console.log("database has connected successfully"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}
export default main();
