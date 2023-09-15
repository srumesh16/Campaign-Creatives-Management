import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    try{

        const userName = req.query.userName as string;
        const llm = req.query.llm as string;
        const theme = req.query.theme as string;
        const audience = req.query.audience as string;
        const gender = req.query.gender as string;
        const size = req.query.size as string;
        const n = req.query.n as string;
        const contentType = req.query.contentType as string;
        const color = req.query.color as string;
        const result = req.query.result as string;
        const currentTimestamp: number = Date.now();

        const userFolderPath = path.join(process.cwd(), 'userSessions', userName);

        if(!fs.existsSync(userFolderPath)) {
            fs.mkdirSync(userFolderPath, {recursive: true});
        }

        const llmFolderPath = path.join(process.cwd(), 'userSessions', userName, llm);

        if(!fs.existsSync(llmFolderPath)){
            fs.mkdirSync(llmFolderPath, {recursive: true});
        }

        const jsonFilePath = path.join(llmFolderPath, `${userName}.json`);
        const jsonContent = JSON.stringify({
            timestamp: currentTimestamp,
            theme: theme,
            audience: audience,
            gender: gender,
            size: size,
            n: n,
            contentType: contentType,
            color: color,
            result: result
        });

        if(!fs.existsSync(jsonFilePath)){
            fs.writeFileSync(jsonFilePath, jsonContent);
        } else {
            fs.appendFileSync(jsonFilePath, jsonContent);
        }
        

        res.status(200);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'An error occured while making the API call'});
    }
}