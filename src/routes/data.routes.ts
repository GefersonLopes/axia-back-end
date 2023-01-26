import { Router } from 'express';
import { getData } from '../controllers/getData';

export const scraping = Router();

scraping.get('/data', getData);

