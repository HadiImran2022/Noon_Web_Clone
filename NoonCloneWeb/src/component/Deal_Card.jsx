import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const Deal_Card = (props) => {
    const {img_url,title,discountPrice,price} = props.card_data;
  return (
    <Card>
        <CardMedia style={{width:"100%",}} sx={{ height: "200px",}} image={img_url} />
        <CardContent>
        <Typography sx={{fontSize:"13px"}} gutterBottom variant="body2">
          {title}
        </Typography>
        <Typography sx={{fontSize:"13px"}} gutterBottom variant="body2">
          <span style={{fontWeight:"bold",textDecoration:"line-through",fontSize:"15px"}}>{discountPrice}</span>
          <span style={{paddingLeft:"10px",fontWeight:"bold",fontSize:"16px"}}>{price}</span>
        </Typography>
        </CardContent>
    </Card>
  )
}

export default Deal_Card;