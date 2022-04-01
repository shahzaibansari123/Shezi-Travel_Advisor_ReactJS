import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Select,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

export default function List({ places, childClicked, isLoading }) {
  const classes = useStyles();
  const [Type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [ElRefs, setElRefs] = useState([]);

  useEffect(() => {
    // _ means that u are not using first place
    const refs=Array(places?.length).fill().map((_,i)=> ElRefs[i] || createRef())
    setElRefs(refs)
  }, [places]);
  // const places=[
  //   {name:'Cool Place'},
  //   {name:'Best Steak'},
  //   {name:'Best Beer'},
  //   {name:'Cool Place'},
  //   {name:'Best Steak'},
  //   {name:'Best Beer'},
  //   {name:'Cool Place'},
  //   {name:'Best Steak'},
  //   {name:'Best Beer'},
  // ]
  // console.log({childClicked})
  //putting it {} helps to identify more info in console about the property
  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Restaurants, Hotels & Attractions Around You
      </Typography>
      {isLoading?(
        <div className={classes.loading}>
          <CircularProgress size="5rem"/>
        </div>
      ):(
        <>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={Type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Ratings</InputLabel>
        <Select value={ratings} onChange={(e) => setRatings(e.target.value)}>
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}
            selected={Number(childClicked === i)}
            refProp={ElRefs[i]} />
          </Grid>
        ))}
      </Grid>
      </>
      )}
    </div>
  );
}
