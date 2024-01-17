import React from 'react'
import img1 from '../../assets/images/selling1.avif'
import img2 from '../../assets/images/selling2.avif'
import img3 from '../../assets/images/selling3.avif'
import img4 from '../../assets/images/selling4.avif'
import img5 from '../../assets/images/selling5.avif'
import img6 from '../../assets/images/selling6.avif'
import img8 from '../../assets/images/selling8.avif'
import img9 from '../../assets/images/selling9.avif'
import img10 from '../../assets/images/selling410.avif'
import img11 from '../../assets/images/selling11.avif'
import img12 from '../../assets/images/selling12.avif'
import img13 from '../../assets/images/card1.avif'
import img14 from '../../assets/images/card2.avif'
import img15 from '../../assets/images/card3.avif'
import img16 from '../../assets/images/card4.avif'
import img17 from '../../assets/images/card5.avif'
import img18 from '../../assets/images/card6.avif'
import img19 from '../../assets/images/card7.avif'
import img20 from '../../assets/images/card8.avif'
import img21 from '../../assets/images/card9.avif'
import img22 from '../../assets/images/card10.avif'
import img23 from '../../assets/images/card11.avif'
import img24 from '../../assets/images/card12.avif'

import BestSelling_Toys from '../BestSelling/BestSelling_Toys'
import { Grid } from '@mui/material'
import BestSelling_HomeApplian from './BestSelling_HomeApplian'
import BestSelling_Card_1 from './BestSellingCard_1'
import BestSelling_Card_2 from './BestSellingCard_2'

const selling_arr = [
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
      title: "BenQ Smart Mini Projector Quality",
      title2: "200ANSI Portable Projector ",
      pTag: "AED",
      price: "4,770",
      oldPrice: "5,099",
      dTag: "6%",
      stock: "Only 5 left in stock",
    },
  ]
  
  const arr2 = [
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
    {
      img_url: img8,
      title: "BOSE Soundbar 500 Speaker",
      title2: "Bose Soundbar 500 Black",
      pTag: "AED",
      price: "4,770",
      oldPrice: "5,099",
      dTag: "6%",
      stock: "Only 5 left in stock",
    },
    {
      img_url: img9,
      title: "BOSE Soundbar 500 Speaker",
      title2: "Bose Soundbar 500 Black",
      pTag: "AED",
      price: "4,770",
      oldPrice: "5,099",
      dTag: "6%",
      stock: "Only 5 left in stock",
    },
    {
      img_url: img10,
      title: "BOSE Soundbar 500 Speaker",
      title2: "Bose Soundbar 500 Black",
      pTag: "AED",
      price: "4,770",
      oldPrice: "5,099",
      dTag: "6%",
      stock: "Only 5 left in stock",
    },
    {
      img_url: img11,
      title: "BOSE Soundbar 500 Speaker",
      title2: "Bose Soundbar 500 Black",
      pTag: "AED",
      price: "4,770",
      oldPrice: "5,099",
      dTag: "6%",
      stock: "Only 5 left in stock",
    },
    {
      img_url: img12,
      title: "BOSE Soundbar 500 Speaker",
      title2: "Bose Soundbar 500 Black",
      pTag: "AED",
      price: "4,770",
      oldPrice: "5,099",
      dTag: "6%",
      stock: "Only 5 left in stock",
    },
  ];

  const arr3 = [
    {
      img_url: img13,
    },
    {
      img_url: img14,

    },
    {
      img_url: img15,

    },
    {
      img_url: img16,

    },
    {
      img_url: img17,

    },
    {
      img_url: img18,
    },
  ];
  const arr4 = [
    {
      img_url: img19,
    },
    {
      img_url: img20,

    },
    {
      img_url: img21,

    },
    {
      img_url: img22,

    },
    {
      img_url: img23,

    },
    {
      img_url: img24,
    },
  ];

const BestSelling = () => {
  return (
    <>
     <div style={{backgroundColor:"#F7F7FA"}} className="">
      <div className="container">
    <h3 className="pb-4 pt-3" style={{margin:"0",padding:"0"}}>Bestselling toys</h3>
        <Grid container spacing={2}>
            {selling_arr.map((item,index)=>{
                return(
                    <Grid key={index} item xs={6} sm={6} md={4} lg={2} xl={2}>
                        <BestSelling_Toys selling_data={item}/>
                    </Grid>
                )
            })}
         
        </Grid>
        <h3 className="pb-4" style={{margin:"0",padding:"0"}}>Bestsellers in home appliances</h3>
        <Grid container spacing={2}>
            {arr2.map((item,index)=>{
                return(
                    <Grid key={index} item xs={6} sm={6} md={4} lg={2} xl={2}>
                        <BestSelling_HomeApplian arr2={item}/>
                    </Grid>
                )
            })}
         
        </Grid>
        <h3 className="pb-4" style={{margin:"0",padding:"0"}}>Women's Fashion</h3>
        <Grid container spacing={2}>
            {arr3.map((item,index)=>{
                return(
                    <Grid key={index} item xs={6} sm={6} md={4} lg={2} xl={2}>
                        <BestSelling_Card_1 arr3={item}/>
                    </Grid>
                )
            })}
         
        </Grid>
        <h3 className="pb-4" style={{margin:"0",padding:"0"}}>Men's Fashion</h3>
        <Grid container spacing={2}>
            {arr4.map((item,index)=>{
                return(
                    <Grid key={index} item xs={6} sm={6} md={4} lg={2} xl={2}>
                        <BestSelling_Card_2 arr4={item}/>
                    </Grid>
                )
            })}
         
        </Grid>
      </div>
    </div>
    </>
  )
}

export default BestSelling
