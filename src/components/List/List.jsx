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

export default function List({ places, childClicked, isLoading, type, setType, rating, setRating }) {
  const classes = useStyles();
  // const [type, setType] = useState("restaurants"); uplifting below one nd this state
  // const [rating, setRating] = useState("");
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    // _ means that u are not using first place
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
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
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Ratings</InputLabel>
            <Select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked === i)}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}
