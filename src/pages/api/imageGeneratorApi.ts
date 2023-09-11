//sample
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";

const openai = new OpenAI();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        
        const image = await openai.images.generate({ prompt: "A cute baby sea otter" });
        console.log(image.data);
        res.status(200).json({});
    } catch (error) {
        console.error('Error reading images directory:', error);
        res.status(500).json({ error: 'An error occurred' });
    }

}





