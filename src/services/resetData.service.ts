import mongoose from 'mongoose';
import { NewSchema } from '../schema/new.schema';

export const dellDatabase = () => {
    const Model = mongoose.model('New', NewSchema);

    Model.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        }
    });
};
