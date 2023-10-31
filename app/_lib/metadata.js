
export const createMetaData = ({ title, description, url, image}) => {
    const data = {
        metadataBase: new URL(process.env.PRODUCTION === 'true' ? 'https://personalityacademy.vercel.app' : 'http://localhost:3000'),
        title: `${title ? title + ' | ' : ''}Personality Academy`,
        description: description || 'Personality Theory Made Simple. Net Positive Impact.',
        url: url || "/",
        openGraph: {
            title: `${title ? title + ' | ' : ''}Personality Academy`,
            description: description || 'Personality Theory Made Simple. Net Positive Impact.',
            url: url || "/",
            images: [{
                url: image ? `/img/${image}` : '/img/embed/home.png',
                width: 1291,
                height: 685
            }]
        }
    }
    return data;
}