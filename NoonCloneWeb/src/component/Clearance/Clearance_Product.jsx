import React from 'react'
import { Card, CardContent, Typography,} from '@mui/material';

const Clearance_Product = (clearance_props) => {
    const {img_url,title,pTag,price,oldPrice,dTag,stock} = clearance_props.clearance_data
  return (
    <div className="mb-5">

    <Card style={{padding:"0 0px",margin:"0"}}>
        <img className='img' width={"100%"} src={img_url} alt="" />
        <CardContent sx={{margin:"0",padding:"0 10px"}}>
            <div className="">
        <Typography sx={{fontWeight:"500"}} gutterBottom variant="body6">
          {title}
        </Typography>
        <Typography>
        <span style={{fontSize:"12px"}}> {pTag}</span>
        <span><strong> {price}</strong></span>
        <span style={{textDecoration:"line-through",fontSize:"13px",fontWeight:"bold",color:"darkgrey"}}> {oldPrice} </span>
        <span style={{fontSize:"12px",color:"green"}}> {dTag} </span>
        </Typography>
        <p style={{fontSize:"13px",margin:"0",padding:"0"}}> {stock} </p>
        </div>
        </CardContent>
    </Card>

    </div>
  )
}

export default Clearance_Product;
