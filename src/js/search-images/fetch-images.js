import axios from "axios";
export default async function (value, page) {
    const url = 'https://pixabay.com/api/';
    const key = '30756391-9d368ba7c089b21e6ce38e5cc';
    const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=408page=${page}`;

    return await axios.get(`${url}${filter}`).then(response => response.data);
}