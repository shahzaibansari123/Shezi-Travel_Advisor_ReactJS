

import axios from "axios";

// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = {
  //   method: 'GET', useless
  //   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', useless
 
  // params: {
  //   bl_latitude: "11.847676",
  //   tr_latitude: "12.838442",
  //   bl_longitude: "109.095887",
  //   tr_longitude: "109.149359",



    // restaurant_tagcategory_standalone: '10591', useless onwards
    // restaurant_tagcategory: '10591',
    // limit: '30',
    // currency: 'USD',
    // open_now: 'false',
    // lunit: 'km',
    // lang: 'en_US'  yhn tk useless
//   },
//   headers: {
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     "X-RapidAPI-Key": "b88607896cmsh101fac6f0ce7be2p134b76jsnb9180a6b19ba",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const getPlacesData = async (type,sw,ne) => {
  try {
    const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, 
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
         
        },
    }
    );



    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getWeatherData = async (lat, lng) => {
  try {
    const {data} = await axios.get("https://community-open-weather-map.p.rapidapi.com/find", 
      {
        params: {
          // q: 'london',
          // cnt: '0',
          // mode: 'null',
          // type: 'link, accurate',
          // units: 'imperial, metric',
          lon: lng, 
          lat: lat,
          
        },
        headers: {
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY
        }
    }
    );


return data;
    
  } catch (error) {
    console.log(error);
  }
};