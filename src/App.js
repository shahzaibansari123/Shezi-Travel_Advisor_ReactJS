import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import {getPlacesData}  from './api'

import { CssBaseline, Grid } from "@material-ui/core";

export default function App() {
  const [places, setPlaces]=useState([])

  useEffect(()=>{
    getPlacesData()
    .then((data)=>{
      console.log(data)
      setPlaces(data)

    })

  },[])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>

      {/* <h1>helloworld</h1> */}
    </>
  );
}
