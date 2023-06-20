import ImageKit from "imagekit";
import { AES as crypt, enc } from "crypto-js";

const info = {
    publicKey: process.env.IMAGE_KIT_PUBLIC,
    privateKey: process.env.IMAGE_KIT_PRIVATE,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
}

const imagekit = new ImageKit(info);

export default async function handler(req, res) {
    const {imageName, imageBase64} = req.body;
    const adminCookie = req.cookies['PAadmin'];
    const decrypted = adminCookie ? crypt.decrypt(adminCookie, process.env.CRYPT_KEY).toString(enc.Utf8) : null;
    if (decrypted === 'true' && req.method === 'POST') {
        const imageRes = await imagekit.upload({
            file: imageBase64,
            folder: '/typesearch/',
            fileName: imageName,
        });
        res.status(200).json({ fileId: imageRes.fileId, image: imageRes.url });
    } else {
        res.status(500).json({ error: 'You are not authorized to use this api route' })
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb'
        }
    },
}