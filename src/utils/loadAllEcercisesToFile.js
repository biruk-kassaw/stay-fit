// const fs = require('fs');
// const axios = require('axios');

// const exerciseOptions = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises',
//   headers: {
//     'X-RapidAPI-Key': '61bcfd54d4mshd7e7bb42b2f94c9p150fd4jsne068f1c23b78',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//   },
// };

// const fetchData = async () => {
//   try {
//     const res = await axios.request(exerciseOptions);
//     return res.data;
//   } catch (ex) {
//     alert('something wrong with the server');
//   }
// };

// const fetchExercisesData = async () => {
//   let exercisesData = [];
//   exercisesData = await fetchData(
//     'https://exercisedb.p.rapidapi.com/exercises',
//     exerciseOptions
//   );
//   const data = JSON.stringify(exercisesData);

//   fs.writeFile('allExercises.json', data, (err) => {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     console.log('JSON data is saved.');
//   });
// };
// fetchExercisesData();
