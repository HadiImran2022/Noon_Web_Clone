import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";
import "./Navbar.css";  // Import CSS file

const Navbar = () => {
  return (
    <Box sx={{ width: "100%",}}>
      <Grid className="Navbar" style={{backgroundColor:"#FEEE00", padding:"13px"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} sm={3} md={3} lg={2} xl={2}>
          <Stack
           justifyContent={"space-evenly"} alignItems={"center"} 
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
          >
            <img src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="" width={"90px"} />
            <span><img src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="" />
            </span>
            <p style={{marginBottom:"0px"}}>Deliver To <br/> <strong>Dubai</strong>
            </p>
          </Stack>
        </Grid>
        <Grid style={{paddingTop:"10px",paddingBottom:"2px"}} justifyContent={"center"} alignItems={"center"} item xs={6} sm={6} md={6} lg={7} xl={7}>
            <input style={{border:"none",outline:"none",width:"100%",height:"100%",padding:"0px 10px",fontSize:"15px"}} type="text" placeholder="What are you looking for?" />
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <Stack height={"100%"} justifyContent={"space-evenly"} alignItems={"center"} 
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap">
                <p style={{marginBottom:"0px"}}><strong>Login </strong> <span style={{fontSize:"16px"}}> < FaRegUser /> </span> </p>
                <p style={{marginBottom:"0px"}}><strong>Wishlist </strong> <span style={{fontSize:"16px"}}> < FaRegHeart /> </span> </p>
                <p style={{marginBottom:"0px"}}><strong>Cart </strong> <span style={{fontSize:"18px"}}> <BiCart /> </span> </p>
            </Stack>
        </Grid>
      </Grid>
      <Grid className="Navbar" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={2}>
          <Stack
            style={{border:"2px solid #f7f7fa", padding:"10px"}}
           justifyContent={"space-evenly"} alignItems={"center"} 
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
          >
            <select style={{width:"70%",border:"none",outline:"none",fontWeight:"bold",color:"#3866DF",fontSize:"15px"}} name="" id="">
              <option value=""> ALL CATEGORIES</option>
            </select>
          </Stack>
        </Grid>
        <Grid style={{paddingTop:"10px",paddingBottom:"2px"}} justifyContent={"center"} alignItems={"center"} item xs={12} sm={12} md={12} lg={8} xl={8}>
        <Stack style={{border:"2px solid #f7f7fa"}} height={"100%"} justifyContent={"space-evenly"} alignItems={"center"} 
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap">
                <p style={{marginBottom:"0px"}}><strong>ELECTRONIC </strong></p>
                <p style={{marginBottom:"0px"}}><strong>MENS </strong></p>
                <p style={{marginBottom:"0px"}}><strong>WOMEN </strong></p>
                <p style={{marginBottom:"0px"}}><strong>HOME </strong></p>
                <p style={{marginBottom:"0px"}}><strong>BEAUTY & FRAGRANCE </strong></p>
                <p style={{marginBottom:"0px"}}><strong>BABY </strong></p>
                <p style={{marginBottom:"0px"}}><strong>TOYS </strong></p>
                <p style={{marginBottom:"0px"}}><strong>SPORTS </strong></p>
                <p style={{marginBottom:"0px"}}><strong>HEALTH & NUTRITION </strong></p>
                <p style={{marginBottom:"0px"}}><strong>BESTSELLERS </strong></p>
                <p style={{marginBottom:"0px"}}><strong>SELL ON MOON </strong></p>
            </Stack>  
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={2} xl={2}>
            <Stack height={"100%"} justifyContent={"space-evenly"} alignItems={"center"} 
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap">
            </Stack>
        </Grid>
      </Grid>
    </Box>

  );
};

export default Navbar;
