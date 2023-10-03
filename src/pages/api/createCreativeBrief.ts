import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {
            userName,
            offeringMsg,
            cta,
            ea,
            pFileUrl,
            bFileUrl,
            urlList
        } = req.query;

        const urlListArray = typeof urlList === 'string' ? urlList.split(',') : [];

        const llmFolderPath = path.join(process.cwd(), 'CreativeBriefs', userName as string, 'cblist.json');

        if (!fs.existsSync(llmFolderPath)) {
            fs.mkdirSync(llmFolderPath, { recursive: true });
        }

        const jsonFilePath = path.join(llmFolderPath, `cblist.json`);

        let existingContent: any[] = [];
        if(fs.existsSync(jsonFilePath)) {
            const fileContent = fs.readFileSync(jsonFilePath, 'utf-8');
            existingContent = JSON.parse(fileContent);
        }

        const newData = {
            offeringMsg: offeringMsg as string,
            cta: cta as string,
            ea: ea as string,
            pFileUrl: pFileUrl,
            bFileUrl: bFileUrl,
            urlList: urlListArray,
            userName: userName as string
           
        };
        existingContent.push(newData);

        fs.writeFileSync(jsonFilePath, JSON.stringify(existingContent));

        // Send a success response with the result
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while making the API call' });
    }
}
