import { Data } from '../interfaces/@types';
import { New } from '../entities/news.entity'; 
import { dellDatabase } from './resetData.service';

export const postDataService = async (data: Data[]) => {
    try {
        const news = await New.find();
        if (news.length > 0) {
            dellDatabase();
        }
        data.filter(async (element) => await New.create(element));
    } catch (error) {
        console.log(error);
    }
};
