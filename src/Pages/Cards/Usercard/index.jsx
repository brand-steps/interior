import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./usercard.css";
import { Link } from "react-router-dom";


const Usercard = () => {
    return (
        
      <div>
        
        <Card sx={{ maxWidth: 345 }} >
            <Link to={"/AllUser"}>
        <CardActionArea>

        <img src="https://cdn-icons-png.flaticon.com/512/4558/4558126.png" alt=""  className='image'/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='userhead'>
              Users
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
  
  export default Usercard;