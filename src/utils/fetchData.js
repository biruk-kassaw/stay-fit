import axios from 'axios';
export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '61bcfd54d4mshd7e7bb42b2f94c9p150fd4jsne068f1c23b78',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  options.url = url
  try {
    const res = await axios.request(options);
    return res.data;
  } catch (ex) {
    alert('something wrong with the server');
  }
};
