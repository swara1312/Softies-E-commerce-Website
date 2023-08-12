import React,{useEffect} from 'react'
import Banner from './Banner'
import Slide from './Slide'
import './mainComponent.css'
import { Divider } from '@mui/material'
import { getProducts } from '../redux/actions/action'
import {useDispatch,useSelector} from "react-redux"


const MainComponent = () => {

const {products} = useSelector(state => state.getproductsdata);

const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getProducts());
},[dispatch])

  return (
    <div className="home_section">
        <div className="banner_part">
            <Banner/>
        </div>
        <div className="slide_part">
          <div className="left_slide">
          <Slide title='Show stoppers' products={products} />
          </div>
          <div className="right_slide">
            <h4>Owner's Baby</h4>
            <img src="https://images.pexels.com/photos/11468502/pexels-photo-11468502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
            <a href="">Ben</a>
          </div>
        </div>
    <Divider/>
    <Slide title='Monthly Top Seller' products={products}/>
    <div className="center_img">
      <img src="https://images.pexels.com/photos/46178/teddy-bear-bear-children-toys-forest-46178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
    </div>
    <Slide title='All Time Top Seller' products={products}/>
        
    </div>
  )
}

export default MainComponent