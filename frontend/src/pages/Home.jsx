import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

export default function () {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("api/recipes");
        setRecipes(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <div>
        <Card>
            <Typography variant="h1" component="h2">
              Recipes
            </Typography>
            <CardContent>
            {recipes.map((recipe) => (
                <li key={recipe._id}>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                    <p>{recipe.timeToCook}</p>
                </li>
            ))}
            </CardContent>
        </Card>
    </div>

  )
}
