import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const fileLocation  = req.query.fileLocation as string;
        const imagesDirectory = path.join(process.cwd(), 'public',fileLocation);
        const imageFiles = fs.readdirSync(imagesDirectory);
        const imageUrls = imageFiles.map((filename) => `/${fileLocation}/${filename}`);
        //console.log(imageUrls);
        res.status(200).json({ imageUrls });
    } catch (error) {
        console.error('Error reading images directory:', error);
        res.status(500).json({ error: 'An error occurred' });
    }

}