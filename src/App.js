import cheffy from './Images/cheffy.jpg';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card';
import axios from 'axios';
function App() {
  const BASE_URL='https://api.edamam.com/api/recipes/v2?app_id=29d5e4e5&app_key=340a83466c6f827a8c4e3421510293d8&type=public&';
  const [recipes,setRecipes]=useState([])
  useEffect(()=>{
    
  },[])
var handleChange=(event)=>{
    console.log(event.target.value);
    async function callApi(){
      const response=await axios({
        url:BASE_URL+'q='+event.target.value,
        method:"GET"
      })
      setRecipes((ps)=>{
        ps=response.data.hits;
        return ps;
      })
    }
    callApi();
  }
  return (
    <div className="App">
      <input type="text" onChange={handleChange}></input>
      <div className="container">
        {
          recipes.map((recipe)=>{
            return <Card recipe={recipe}></Card>;
          })
        }
        </div>
    </div>

  );
}

export default App;
