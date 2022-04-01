import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";

import { CssBaseline, Grid } from "@material-ui/core";

export default function App() {
  const [places, setPlaces] = useState([]);
  // const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 }); ye default rkhne k lye hein cz jb apne cuurent location ki api use na ki v ho
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading]=useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    // console.log(bounds, coordinates);
    setIsLoading(true)
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      // console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} childClicked={childClicked} isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>

      {/* <h1>helloworld</h1> */}
    </>
  );
}
