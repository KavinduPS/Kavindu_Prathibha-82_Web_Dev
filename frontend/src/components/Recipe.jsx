const axios = require('axios');
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Recipe() {

    const baseURL = `${import.meta.env.SERVER_URL}/api/recipes`;
    const[recipes, setRecipes] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let processing = true;
        fetchData(processing);
        return () => {
            processing = false
        }
    }, [])

    const axiosGet = async(processing) => {
        await axios.get(baseURL)
        .then(res => {
            if (processing) {
                setRecipes(res.data)
            }
        })
        .catch(err => console.log(err))

    }

  return (
    <div> 
        <Card>
            <CardContent>
                <p>{recipes}</p>
            </CardContent>
        </Card>
  </div>
  )
}

export default Recipe