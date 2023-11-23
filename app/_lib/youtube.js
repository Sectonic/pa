
export const getYoutubeVideoId = (url) => {
    const regex = /(?:youtu\.be\/|youtube\.com(?:\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/)|youtu\.be\/|embed\/|v\/|m\/|watch\?(?:[^=]+=[^&]+&)*?v=))([^"&?\/\s]{11})/gm;
    const match = regex.exec(url);
    return match ? match[1] : null;
}
  
export const checkIfYoutubeChannel = (url) => {
    const videoId = getYoutubeVideoId(url);
    if (!videoId) {
        return [true, videoId];
    } else {
        return [false, videoId];
    }
}