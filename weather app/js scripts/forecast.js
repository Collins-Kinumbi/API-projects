//API provider for this project
//https://developer.accuweather.com/home

// accuweather api key variable
const key = "	oSjsrAA9bnCLx0khGJ47rIwRBjz4kAFP";

//2. Get weather info
const getWeather = async (cityKey) => {
  // making reguests
  const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
  const query = `${cityKey}?apikey=${key}`;

  // Fetching resources
  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data[0]); //the zero ensures we get the first index which contains the info we need
  return data[0];
};

//1. Get city info
const getCity = async (city) => {
  // Making requests
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
  const query = `?apikey=${key}&q=${city}`;

  // Fetching resources
  const response = await fetch(base + query);
  const data = await response.json();

  /*console.log(data[0]); //the zero index ensures we get the closest match 
  if there's a list of cities with similar names*/

  return data[0];
};
// getCity("Nakuru"); for the console log

// // TESTING STUFF
// getCity("Nakuru")
//   .then((data) => {
//     // console.log(data);
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // getWeather("225560");
