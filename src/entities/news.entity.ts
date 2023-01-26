import mongoose from "mongoose";
import { NewSchema } from "../schema/new.schema";

export const New = mongoose.model('New', NewSchema);