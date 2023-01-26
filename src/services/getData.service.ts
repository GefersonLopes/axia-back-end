import axios from 'axios';
import * as cheerio from 'cheerio';
import { Data } from '../interfaces/@types';

export const getDataService = async (url: string): Promise<Data[]> => {
    const { data: html } = await axios.get(url + '/markets/currencies/');
    const $ = cheerio.load(html);

    const array: Data[] = [];

    const card = $('.media-story-card__body__3tRWy');
    card.each((_, tagElement) => {
        const title = $(tagElement).find('a:nth-child(2)');

        const time = $(tagElement).find('time');
        const date = $(time).attr('datetime');

        const div = $(tagElement).parent().parent();
        const a = $(div).find('a');

        array.push({
            title: $(title).text(),
            datatime: new Date(date!),
            link: url + $(a).attr('href'),
        });
    });
    return array;
};
