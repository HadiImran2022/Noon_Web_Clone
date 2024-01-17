import React from 'react'
import img1 from '../../assets/images/7060c16d-bcd3-4275-9431-3fef8b1a5a01.jpeg'
import img2 from '../../assets/images/N53422649A_1.jpeg'
import img3 from '../../assets/images/N53338272A_1.jpeg'
import img4 from '../../assets/images/e4637035-8cd6-4d56-a859-b5e1017d52ed.jpeg'
import img5 from '../../assets/images/N53356366A_1.jpeg'
import img6 from '../../assets/images/N19200514A_1.jpeg'
import { Grid } from "@mui/material";
import Electronic_Products from './Electronic_Products'

const electronic_arr = [
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
      title: "JBL Cinema SB270 2.1 JBL Cinema ",
      title2: "Channel Soundbar With Wir",
      pTag: "AED",
      price: "1,875",
      oldPrice: "3,999",
      dTag: "53%",
      stock: "550+ sold recently",
    },
    {
      img_url: img3,
      title: "Xiaomi 50 Inch UHD 4K Smart",
      title2: "Android Led TV With Hands ",
      pTag: "AED",
      price: "19.50",
      oldPrice: "88",
      dTag: "78%",
      stock: "290+ sold recently",
    },
    {
      img_url: img4,
      title: "Hisense VIDAA 70 inch U6 4K Smart",
      title2: "TV, 70 Inch UHD E6K With D",
      pTag: "AED",
      price: "59.45",
      oldPrice: "69%",
      dTag: "13%",
      stock: "Stock Available",
    },
    {
      img_url: img5,
      title: "BenQ Smart Mini Projector Quality",
      title2: "200ANSI Portable Projector ",
      pTag: "AED",
      price: "4,770",
      oldPrice: "5,099",
      dTag: "6%",
      stock: "Only 5 left in stock",
    },
    {
      img_url: img6,
      title: "BOSE Soundbar 500 Speaker",
      title2: "Bose Soundbar 500 Black",
      pTag: "AED",
      price: "4,770",
      oldPrice: "5,099",
      dTag: "6%",
      stock: "Only 5 left in stock",
    },
  ];

  
const Electronic = () => {
  return (
    <>
     <div style={{backgroundColor:"#F7F7FA"}} className="">
      <div className="container">
    <h3 className="pb-4 pt-5" style={{margin:"0",padding:"0"}}>Recommended for you</h3>
        <Grid container spacing={2}>
            {electronic_arr.map((item,index)=>{
                return(
                    <Grid key={index} item xs={6} sm={6} md={4} lg={2} xl={2}>
                        <Electronic_Products electronic_data={item}/>
                    </Grid>
                )
            })}
         
        </Grid>
      </div>
    </div>
    </>
  )
}

export default Electronic
