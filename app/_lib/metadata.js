
export const createMetaData = ({ title, description, url, image}) => {
    const data = {
        metadataBase: new URL(process.env.PRODUCTION === 'true' ? 'https://personalityacademy.vercel.app' : 'http://localhost:3000'),
        title: `${title ? title + ' | ' : ''}Personality Academy`,
        description: description || 'Personality Theory Made Simple. Net Positive Impact.',
        url: url || "/",
        twitter: {
            card: 'summary_large_image',
            title: `${title ? title + ' | ' : ''}Personality Academy`,
            description: description || 'Personality Theory Made Simple. Net Positive Impact.',
            url: url || "/",
            images: [`${image || '/embed/home.png'}`]
        }
    }
    return data;
}