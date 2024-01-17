import React from 'react'
import { Grid } from "@mui/material";
import Banner_Card from '../Banner/Banner_Cards'

import img1 from '../../assets/images/N42934460A_7.jpeg'
import img2 from '../../assets/images/N46569464A_1.jpeg'
import img3 from '../../assets/images/N26505142A_1.jpeg'
import img4 from '../../assets/images/N43431945A_1.jpeg'

const banner_arr = [
  {
    img_url: img1,
    title: "Switch Headboard - Twin Size Bed Glossy White Color - Size 934 X 2060",
    pTag: "AED",
    price: "289",
    oldPrice: "989",
  },
  {
    img_url: img2,
    title: "Comforter Sets, Noon East & more Comforter Sets, Noon East & more",
    price: "Up to 80% off",
  },
  {
    img_url: img3,
    title: "Noon East 10-Piece 10 Piece Cookware Set - Aluminum Pots And Pans Non ",
    pTag: "AED",
    price: "199",
    oldPrice: "399",
  },
  {
    img_url: img4,
    title: "Noon East Sandwich Maker And 5 In 1 Snack Heater - 750 W For 4 Slice Grill",
    title2: "Double Touch",
    pTag: "AED",
    price: "69",
    oldPrice: "220",
  },
]

const Banner = () => {
  return (
    <>
    <div style={{backgroundColor:"#E1EFFA",}} className="">
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="banner container">
        </div>
    </Grid>
    <div className="container my-3">
    <h3 className="pb-4" style={{margin:"0",padding:"0"}}>Deals only on noon</h3>
        <Grid container spacing={2}>
          {banner_arr.map((item, index) => {
            return (
              <Grid key={index} item xs={6} sm={6} md={6} lg={3} xl={3}>
                <Banner_Card banner_data={item} />
              </Grid>
            );
          })}
        </Grid>
    </div>
    </div>
    </>
  )
}

export default Banner
