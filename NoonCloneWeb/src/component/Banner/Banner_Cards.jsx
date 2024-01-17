import React from 'react'
import { Card, CardContent, Typography,} from '@mui/material';

const Banner_Cards = (banner_props) => {
    const {img_url,title,pTag,price,oldPrice,dTag,stock} = banner_props.banner_data
  return (
    <Card style={{padding:"0 0px",margin:"0"}}>
    <img className='img' width={"100%"} src={img_url} alt="" />
    <CardContent sx={{margin:"0",padding:"0 10px"}}>
        <div className="">
    <Typography sx={{fontWeight:"500"}} gutterBottom variant="body6">
      {title}
    </Typography>
    <Typography>
    <span style={{textDecoration:"line-through",fontSize:"17px",fontWeight:"bold",color:"black"}}> {oldPrice} </span>
    <span style={{fontSize:"21px",fontWeight:"bold",color:"#000"}}> {price} </span>
    <span style={{fontSize:"20px",fontWeight:"550",color:"#000"}}> {pTag} </span>
    </Typography>
    </div>
    </CardContent>
</Card>
  )
}

export default Banner_Cards
