import { Request, Response } from 'express';
import { getDataService } from '../services/getData.service';
import { postDataService } from '../services/postData.service';

export const getData = async (req: Request, res: Response) => {
    const url = 'https://www.reuters.com';

    try {
        const resultGetData = await getDataService(url);
        await postDataService(resultGetData);
        
        return res.status(200).json(resultGetData);
    } catch (err) {
        console.log(err);
        res.status(400).send('Erro ao buscar dados.');
    }
};
