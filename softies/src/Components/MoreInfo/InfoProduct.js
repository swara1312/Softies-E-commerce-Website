import React, { useContext, useEffect, useState } from "react";
import { Divider } from "@mui/material";
import "./infoProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { Logincontext } from "../context/ContextProvider";

const InfoProduct = () => {
  const { id } = useParams("");

  const history = useNavigate("");

  const { account, setAccount } = useContext(Logincontext);

  const [inddata, setInddata] = useState("");

  const getinddata = async () => {
    const res = await fetch(`/getProductInfo/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status !== 201) {
      alert("no data available");
    } else {
      setInddata(data);
    }
  };

  useEffect(() => {
    getinddata();
  }, [id]);

  const addtocart = async (id) => {
    console.log(id);
    const check = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inddata,
      }),
      credentials: "include",
    });
    const data1 = await check.json();
    // console.log(data1 +  'ok');

    if (check.status !== 201) {
      alert("no data available");
    } else {
      setAccount(data1);
      history("/buynow");
    }
  };

  return (
    <div className="cart_section">
      {inddata && Object.keys(inddata).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={inddata.detailUrl} alt="cart" />
            <div className="cart_btn">
              <button
                className="cart_btn1"
                onClick={() => addtocart(inddata.id)}
              >
                Add to Cart
              </button>
              <button className="cart_btn2">Buy Now</button>
            </div>
          </div>
          <div className="borderline">
            <div className="right_cart">
              <h3>{inddata.title.shortTitle}</h3>
              <h4>{inddata.title.longTitle}</h4>
              <Divider />
              <p className="mrp">
                M.R.P. : <del>₹{inddata.price.mrp}</del>
              </p>
              <p>
                Deal of the Day :{" "}
                <span style={{ color: "#B12704" }}>
                  ₹{inddata.price.cost}.00
                </span>
              </p>
              <p>
                You save :{" "}
                <span style={{ color: "#B12704" }}>
                  {" "}
                  ₹{inddata.price.mrp - inddata.price.cost} (
                  {inddata.price.discount}){" "}
                </span>
              </p>

              {/* <div className="discount_box"> */}
              {/* <h5>
                Discount :{" "}
                <span style={{ color: "#111" }}>{inddata.discount}</span>{" "}
              </h5> */}
              {/* <h4>
                FREE Delivery :{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Oct 8 - 21
                </span>{" "}
                Details
              </h4> */}
              {/* <p style={{ color: "#111" }}>
                Fastest delivery:{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  {" "}
                  Tomorrow 11AM
                </span>
              </p>
            </div> */}
              <p className="description">
                About the Item :{" "}
                <span
                  style={{
                    color: "#565959",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "0.4px",
                  }}
                >
                  {inddata.description}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoProduct;
