
import axios from "axios";

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const DictionaryApi = axios.create({
    baseURL: baseUrl
});

export default DictionaryApi;