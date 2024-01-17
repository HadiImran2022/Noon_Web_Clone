import { Grid } from '@mui/material';
import React from 'react'
import Deal_Card from './Deal_Card';

const cards_arr = [
  {
    img_url:
      "https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif",
  },
 
  {
    img_url:
      "https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif",
  },
  {
    img_url:
      "https://f.nooncdn.com/products/tr:n-t_240/pnsku/N70020847V/45/_/1698930155/640da032-9952-4e34-88b5-80f4711cbe63.jpg",
    title: "Xiaomi Poco C65 Black 8GB RAM, 256GB ROM",
    discountPrice: 499,
    price: "433 AED"
  },
  {
    img_url:
      "https://f.nooncdn.com/mpcms/EN0001/assets/26b5ab14-2596-473a-b1e6-411903ebcb44.png?format=avif",
  },

];

const Card = () => {
  return (
    <>
<div style={{backgroundColor:"#F7F7FA"}} className="">
    <div className="container my-3" >

      <Grid container spacing={2}>
        {
          cards_arr.map((current_obj,index)=>{
            return(
              <Grid key={index} item xs={6} sm={6} md={4} lg={2} xl={2} >
                <Deal_Card card_data={current_obj}/>
              </Grid>
              
            )
          })
        }
      </Grid>
    </div>
</div>

    </>
  )
}

export default Card;

