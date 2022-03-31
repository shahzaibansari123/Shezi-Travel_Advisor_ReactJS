

import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  //   method: 'GET',
  //   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
    // restaurant_tagcategory_standalone: '10591',
    // restaurant_tagcategory: '10591',
    // limit: '30',
    // currency: 'USD',
    // open_now: 'false',
    // lunit: 'km',
    // lang: 'en_US'
  },
  headers: {
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "b88607896cmsh101fac6f0ce7be2p134b76jsnb9180a6b19ba",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
