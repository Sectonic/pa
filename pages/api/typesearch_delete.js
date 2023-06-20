import ImageKit from "imagekit";
import { AES as crypt, enc } from "crypto-js";

const info = {
    publicKey: process.env.IMAGE_KIT_PUBLIC,
    privateKey: process.env.IMAGE_KIT_PRIVATE,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
}

const imagekit = new ImageKit(info);

export default function handler(req, res) {
    const { fileId } = req.body;
    const adminCookie = req.cookies['PAadmin'];
    const decrypted = adminCookie ? crypt.decrypt(adminCookie, process.env.CRYPT_KEY).toString(enc.Utf8) : null;
    if (decrypted === 'true' && req.method === 'POST') {
        imagekit.deleteFile(fileId);
        res.status(200).end();
    } else {
        res.status(500).json({ error: 'You are not authorized to use this api route' })
    }
}