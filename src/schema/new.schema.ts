import mongoose from 'mongoose';

export const NewSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    datatime: {
        type: Date,
    },
    link: {
        type: String,
    },
});
