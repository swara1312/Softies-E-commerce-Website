import { React, useContext, useEffect, useState } from "react";
import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { Logincontext } from "../context/ContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LeftNav from "./LeftNav";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/action";

const Nav = () => {
  const history = useNavigate("");

  const [text, setText] = useState();
  // only for search
  const { products } = useSelector((state) => state.getproductsdata);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [liopen, setLiopen] = useState(true);

  const [dropen, setDropen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { account, setAccount } = useContext(Logincontext);

  const getdetailsvaliduser = async () => {
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    });

    const data = await res.json();

    if (res.status !== 201) {
      console.log("first login");
    } else {
      setAccount(data);
    }
  };

  useEffect(() => {
    getdetailsvaliduser();
  }, []);

  const logoutuser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    });

    const data2 = await res2.json();
    // console.log(data2);

    if (!res2.status === 201) {
      const error = new Error(res2.error);
      throw error;
    } else {
      setAccount(false);
      setOpen(false);
      toast.success("user Logout 😃!", {
        position: "top-center",
      });
      history("/");
    }
  };

  const handelopen = () => {
    setDropen(true);
  };

  const handleClosedr = () => {
    setDropen(false);
  };

  const getText = (text) => {
    setText(text);
    setLiopen(false);
  };

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handelopen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer open={dropen} onClose={handleClosedr}>
            <LeftNav userlog={logoutuser} logclose={handleClosedr} />
          </Drawer>
          <div className="navlogo">
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <p>Softies</p>
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input
              type="text"
              name=""
              onChange={(e) => getText(e.target.value)}
              placeholder="Search Your Softy"
            />
            <div className="search_icon">
              <SearchIcon />
            </div>
            {text && (
              <List className="extrasearch" hidden={liopen}>
                {products
                  .filter((product) =>
                    product.title.longTitle
                      .toLowerCase()
                      .includes(text.toLowerCase())
                  )
                  .map((product) => (
                    <ListItem>
                      <NavLink
                        to={`/getProductInfo/${product.id}`}
                        onClick={() => setLiopen(true)}
                      >
                        {product.title.longTitle}
                      </NavLink>
                    </ListItem>
                  ))}
              </List>
            )}
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">Sign-in</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow" style={{ textDecoration: "none" }}>
                <Badge badgeContent={account.carts.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}
          </div>
          {account ? (
            <Avatar className="avatar2" onClick={handleClick}>
              {account.fname[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar className="avatar" onClick={handleClick}></Avatar>
          )}
          <div className="menu_div">
            <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
              <MenuItem onClick={handleClose} style={{ margin: 10 }}>
                My account
              </MenuItem>
              {account ? (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    logoutuser();
                  }}
                  style={{ margin: 10 }}
                >
                  <LogoutIcon style={{ fontSize: 16, marginRight: 3 }} /> Logout
                </MenuItem>
              ) : (
                ""
              )}
            </Menu>
          </div>
          <ToastContainer />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
