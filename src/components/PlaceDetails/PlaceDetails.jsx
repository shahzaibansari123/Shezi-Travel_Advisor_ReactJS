import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

export default function PlaceDetails({ place }) {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
      
      title={place.name}
      />
      <CardContent>
      <Typography gutterBottom variant="h5">{place.name}</Typography>
      <Box display= "flex" justifyContent="space-between">
        <Typography variant="subtitle1">Price</Typography>
        <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        

      </Box>
      <Box display= "flex" justifyContent="space-between">
        <Typography variant="subtitle1">Ranking</Typography>
        <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        
      </Box>
      {/* in .map not using curlee braces in call back fn because we want to instatnlt return something or data keep in mind */}
      {place?.awards?.map((award)=>(
   <Box my={1} display= "flex" justifyContent="space-between">
   <img src={award.images.small} alt={award.display_name}/>
   
 </Box>
))}
      

    </CardContent>
    </Card>
    
    // <div>{place.name}</div>;
  );
}
