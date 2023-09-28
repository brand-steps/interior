import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./productcard.css";
import { Link } from "react-router-dom";


const Productcard = () => {
    return (
        
      <div>
        
        <Card sx={{ maxWidth: 345 }} >
            <Link to={"/AllProductDashboad"}>
        <CardActionArea>

        <img src="https://static.thenounproject.com/png/5601359-200.png" alt=""  className='images'/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='producthead'>
              Products
            </Typography>
            <Typography variant="body2" color="text.secondary">

            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
        <CardActions>
        </CardActions>
      </Card>
      
      </div>
    
    )
  }
  
  export default Productcard;