import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const BestSelling_Card_2 = (arr4) => {
  const { img_url, title, pTag, price, oldPrice, dTag, stock } = arr4.arr4;
  return (
    <div className="mb-5">
      <div className="">
        <img className="img" width={"100%"} src={img_url} alt="" />
        <div className="">
          <Typography sx={{ fontWeight: "500" }} gutterBottom variant="body6">
            {title}
          </Typography>
          <Typography>
            <span style={{ fontSize: "12px" }}> {pTag}</span>
            <span>
              <strong> {price}</strong>
            </span>
            <span
              style={{
                textDecoration: "line-through",
                fontSize: "13px",
                fontWeight: "bold",
                color: "darkgrey",
              }}
            >
            </span>
            <span style={{ fontSize: "12px", color: "green" }}> {dTag} </span>
          </Typography>
          <p style={{ fontSize: "13px", margin: "0", padding: "0" }}>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSelling_Card_2;
