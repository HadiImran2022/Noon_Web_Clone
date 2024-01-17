import React from 'react'
import img1 from '../../assets/images/N20985375A_1.jpeg'
import img2 from '../../assets/images/56ba35b5-a00f-47ff-800e-a129c903210d.jpeg'
import img3 from '../../assets/images/N53418074A_1.jpeg'
import img4 from '../../assets/images/N13164722A_1.jpeg'
import img5 from '../../assets/images/N53356366A_1.jpeg'
import img6 from '../../assets/images/N41247610A_1.jpeg'
import { Grid } from "@mui/material";
import Clearance_Product from './Clearance_Product'


const clearance_arr = [
    {
        img_url: img1,
        title: "Samsung 58 Inch Crystal UHD",
        title2: "4K Smart TV 2023 58CU700",
        pTag: "AED",
        price: "4,770",
        oldPrice: "5,099",
        dTag: "6%",
        stock: "Only 5 left in stock",
      },
    {
        img_url: img2,
        title: "Samsung 58 Inch Crystal UHD",
        title2: "4K Smart TV 2023 58CU700",
        pTag: "AED",
        price: "4,770",
        oldPrice: "5,099",
        dTag: "6%",
        stock: "Only 5 left in stock",
      },
    {
        img_url: img3,
        title: "Samsung 58 Inch Crystal UHD",
        title2: "4K Smart TV 2023 58CU700",
        pTag: "AED",
        price: "4,770",
        oldPrice: "5,099",
        dTag: "6%",
        stock: "Only 5 left in stock",
      },
    {
        img_url: img4,
        title: "Samsung 58 Inch Crystal UHD",
        title2: "4K Smart TV 2023 58CU700",
        pTag: "AED",
        price: "4,770",
        oldPrice: "5,099",
        dTag: "6%",
        stock: "Only 5 left in stock",
      },
    {
        img_url: img5,
        title: "Samsung 58 Inch Crystal UHD",
        title2: "4K Smart TV 2023 58CU700",
        pTag: "AED",
        price: "4,770",
        oldPrice: "5,099",
        dTag: "6%",
        stock: "Only 5 left in stock",
      },
    {
        img_url: img6,
        title: "Samsung 58 Inch Crystal UHD",
        title2: "4K Smart TV 2023 58CU700",
        pTag: "AED",
        price: "4,770",
        oldPrice: "5,099",
        dTag: "6%",
        stock: "Only 5 left in stock",
      },
]

const Clearance = () => {
  return (
    <>
    <div style={{backgroundColor:"#F7F7FA"}} className="">
    <div className="container">
  <h3 className="pb-4 pt-5" style={{margin:"0",padding:"0"}}>Recommended for you</h3>
      <Grid container spacing={2}>
          {clearance_arr.map((item,index)=>{
              return(
                  <Grid key={index} item xs={6} sm={6} md={4} lg={2} xl={2}>
                      <Clearance_Product clearance_data={item}/>
                  </Grid>
              )
          })}
       
      </Grid>
    </div>
  </div>
  </>
  )
}

export default Clearance
