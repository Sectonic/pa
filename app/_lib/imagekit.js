"use server";

import ImageKit from "imagekit";

const info = {
    publicKey: process.env.IMAGE_KIT_PUBLIC,
    privateKey: process.env.IMAGE_KIT_PRIVATE,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
}

const imagekit = new ImageKit(info);

export const uploadFile = async (imageName, imageBase64) => {
    const res = await imagekit.upload({
        file: imageBase64,
        folder: '/typesearch/',
        fileName: imageName,
    });
    return {
        fileId: res.fileId,
        image: res.url
    }
}

export const deleteFile = (fileId) => {
    imagekit.deleteFile(fileId);
}