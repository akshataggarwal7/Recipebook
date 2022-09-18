import cheffy from "./Images/cheffy.jpg";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Component/Card";
import axios from "axios";
import { Button, Input, Box } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
function App() {
  const BASE_URL =
    "https://api.edamam.com/api/recipes/v2?app_id=29d5e4e5&app_key=340a83466c6f827a8c4e3421510293d8&type=public&";
  const [recipes, setRecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [isLoading,setIsLoading]= useState(false);

  const handleChange = (e) => {
    setsearch(e.target.value);
  };

  const searchRecipe = () => {
    setIsLoading(true);
    async function callApi() {
      const response = await axios({
        url: BASE_URL + "q=" + search,
        method: "GET",
      });
      setRecipes((ps) => {
        ps = response.data.hits;
        return ps;
      });
      setIsLoading(false);
    }
    callApi();
  };
  return (
    <Box className="App">
      <Box className="searchBar">
        <Input type="text" onChange={handleChange}></Input>
        <span>
          <Button onClick={searchRecipe}>Search</Button>
        </span>
      </Box>
      <Box className="container">
        {!isLoading ?  recipes.map((recipe) => {
          return <Card recipe={recipe}></Card>;
        }) : <Spinner color='red.500' />}
      </Box>
    </Box>
  );
}

export default App;
