import React from "react";
import Heart from "react-heart";
import { useLocalStorage } from "./storage.js";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const ProductListItem = (props) => {
  const [active, setActive] = useLocalStorage(`${props.keyy}`, false);

  return (
    <>
      <ImageListItem>
        <img
          src={`${props.item.img_src}?w=248&fit=crop&auto=format`}
          srcSet={`${props.item.img_src}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={props.item.title}
          loading="lazy"
        />
        <div style={{ width: "2rem" }} className="ml-2 mt-2 mt-n5">
          <Heart isActive={!active} onClick={() => setActive(!active)} />
        </div>
        <ImageListItemBar
          sx={{ mr: 2, mt: 2 }}
          title={props.item?.camera?.full_name}
          Camera
          subtitle={<span>{props.item.earth_date}</span>}
          position="below"
          align="right"
        />
      </ImageListItem>
    </>
  );
};

export default ProductListItem;
