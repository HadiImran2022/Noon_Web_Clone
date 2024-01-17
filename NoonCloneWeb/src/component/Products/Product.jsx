import { Grid } from "@mui/material";
import React from "react";
import Product_Card from "./Product_Card";
import img1 from "../../assets/images/N53347167A_1.jpeg";
import img2 from "../../assets/images/N40633047A_1.jpeg";
import img3 from "../../assets/images/N43241184A_1.jpeg";
import img4 from "../../assets/images/N46554630A_2.avif";
import img5 from "../../assets/images/N41247610A_1.jpeg";
import img6 from "../../assets/images/N53347167A_1.jpeg";

const products_arr = [
  {
    img_url: img1,
    title: "Apple iPhone 14 Pro Max",
    title2: "256GB 5G",
    pTag: "AED",
    price: "4,770",
    oldPrice: "5,099",
    dTag: "6%",
    stock: "Only 5 left in stock",
  },
  {
    img_url: img2,
    title: "Sony PlayStation 5 Console",
    title2: "(Disc Version)",
    pTag: "AED",
    price: "1,875",
    oldPrice: "3,999",
    dTag: "53%",
    stock: "550+ sold recently",
  },
  {
    img_url: img3,
    title: "T500 Bluetooth Full Touch",
    title2: "Call Smartwatch",
    pTag: "AED",
    price: "19.50",
    oldPrice: "88",
    dTag: "78%",
    stock: "290+ sold recently",
  },
  {
    img_url: img4,
    title: "KIKO MILANO Unlimited",
    title2: "Double Touch",
    pTag: "AED",
    price: "59.45",
    oldPrice: "69%",
    dTag: "13%",
    stock: "Stock Available",
  },
  {
    img_url: img5,
    title: "Apple iPhone 14 Pro Max",
    title2: "256GB 5G",
    pTag: "AED",
    price: "4,770",
    oldPrice: "5,099",
    dTag: "6%",
    stock: "Only 5 left in stock",
  },
  {
    img_url: img6,
    title: "Apple iPhone 14 Pro Max",
    title2: "256GB 5G",
    pTag: "AED",
    price: "4,770",
    oldPrice: "5,099",
    dTag: "6%",
    stock: "Only 5 left in stock",
  },
];

const Product = () => {
  return (
      <>
    <div style={{backgroundColor:"#F7F7FA"}} className="">
      <div className="container my-4">
    <h3 className="pb-4" style={{margin:"0",padding:"0"}}>Recommended for you</h3>
        <Grid container spacing={2}>
          {products_arr.map((item, index) => {
            return (
              <Grid key={index} item xs={6} sm={6} md={4} lg={2} xl={2}>
                <Product_Card products_data={item} />
              </Grid>
            );
          })
          }
        </Grid>
      </div>
    </div>
    </>
  );
};

export default Product;
