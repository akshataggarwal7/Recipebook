import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import cheffy from "../Images/cheffy.jpg";
import "./Card.css";

function Card(props) {
  // console.log(props.recipe.recipe.label);
  const gotoRecipePage = () => {
    window.open(props.recipe.recipe.shareAs);
  };
  var calorie = props.recipe.recipe.calories.toString().split(".")[0];
  return (
    <Box boxShadow={"xl"} backgroundColor={"#00B5D8"} className="card">
      <Box className="card-header">
        <Image
          padding={"0px 8px"}
          src={props.recipe ? props.recipe.recipe.image : ""}
        />
      </Box>
      <Box className="card-body">
        <Text fontSize={"lg"} fontWeight={"800"} className="card-body-header">
          {props.recipe
            ? props.recipe.recipe.label.length > 20
              ? props.recipe.recipe.label.substring(0, 20) + "..."
              : props.recipe.recipe.label
            : "Some Recipe"}
        </Text>
        <Text>Calories :- {calorie}</Text>
        <Button onClick={gotoRecipePage} mt={"5"} size="xs">
          View Recipe
        </Button>
      </Box>
    </Box>
  );
}

export default Card;
