
export const createMetaData = ({ title, description, url, image}) => {
    const data = {
        metadataBase: new URL(process.env.PRODUCTION === 'true' ? 'https://personality.academy' : 'http://localhost:3000'),
        title: `${title ? title + ' | ' : ''}Personality Academy`,
        description: description || 'Personality Theory Made Simple. Net Positive Impact.',
        url: url || "/",
        openGraph: {
            title: `${title ? title + ' | ' : ''}Personality Academy`,
            description: description || 'Personality Theory Made Simple. Net Positive Impact.',
            url: url || "/",
            // images: image ? [image] : []
        }
    }
    return data;
}