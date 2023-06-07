
export const createMetaData = ({ title, description, url, image}) => {
    const data = {
        title: `${title ? title + ' | ' : ''}Personality Academy`,
        description: description ? description : 'Personality Theory Made Simple. Net Positive Impact.',
        url: `https://personalityacademy.netlify.app${url ? url : "/"}`,
        images: [{
            url: `https://personalityacademy.netlify.app/img${image ? image : '/embed/home.png'}`,
            width: 1291,
            height: 685
        }],
        twitter: {
            card: 'summary_large_image'
        }
    }
    return data;
}