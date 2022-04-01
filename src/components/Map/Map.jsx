import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

export default function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  // const [childClicked, setChildClicked]=useState(null) uplifting state to the parent comp of map and list i.e app

  // const coordinates = { lat: 0, lng: 0 };
  return (
    // <div>Shahzaib</div>
    <div className={classes.mapContainer}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "" }}
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        option={""}
        onChange={(e) => {
          // console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {setChildClicked(child)}}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)} //we use lat and lng to display cards right inside the map
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon fontSize="large" color="primary" />
            ) : (
              <Paper eleavtion={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
