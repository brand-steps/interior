import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/material';
import { color } from '@mui/system';
        
export default function BasicPagination({setPage , pageNumber  }) {
const handleChange = (page)=>{
  setPage(page)
window.scroll(0,0)
}


  return (
<div  >
    <div>
    
      <Pagination   
      
      onChange={(e)=>   handleChange(e.target.textContent)}
      sx={{
    width: '100vw',
    color: 'success.main',
        position : "static", 

         display : 'flex', 
         justifyContent : "end",
        width : "100%",
        boxShadow : "none", 
        paddingRight : "80px"

  }}   count={pageNumber}      variant={'outlined'}     color="primary" />
    </div>
</div>
  );
}