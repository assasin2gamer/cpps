// eslint-disable-next-line
//import logo from './logo.svg';
import './Home.css';
import React, { useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserView, MobileView} from 'react-device-detect';
import mb_bg_img from "./images/mobile_bg.jpg"
import main_img1 from "./images/sash.jpg"
import main_img2 from "./images/edamame.jpg"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"
import main_img3 from "./images/drinks.jpg"
import mb_bg_img2 from "./images/mobile_bg_crop.jpg"
import mb_bg_img3 from "./images/wang1.jpg"
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import "@fontsource/dancing-script"; // Defaults to weight 400.
import {Link} from 'react-router-dom'
import "@fontsource/quicksand"
import { fontFamily } from '@mui/system';
import "@fontsource/dosis"
import { autocompleteClasses } from '@mui/material';

import home_bap from "./images/home_bap.png"
import home_c from "./images/home_c.png"
import home_noodle from "./images/home_noodle.png"

function Home() {
  var base_link = window.location.origin;
  const [toggle1, settoggle1] = useState(true)
  const [toggle2, settoggle2] = useState(false)
  const [toggle3, settoggle3] = useState(false)


  function tog1(){
    if (toggle1 == false){
      settoggle1(true)
    }
    if (toggle2 == true){
      settoggle2(false)
    }
    if (toggle3 == true){
      settoggle3(false)
    }
    
  }
  function tog2(){
    if (toggle1 == true){
      settoggle1(false)
    }
    if (toggle2 == false){
      settoggle2(true)
    }
    if (toggle3 == true){
      settoggle3(false)
    }
  }
  function tog3(){
    if (toggle1 == true){
      settoggle1(false)
    }
    if (toggle2 == true){
      settoggle2(false)
    }
    if (toggle3 == false){
      settoggle3(true)
    }
  }
  return (
    


   <>
   <link rel="stylesheet" href="https://use.typekit.net/nee5kxp.css"/>
   <link rel="stylesheet" href="https://use.typekit.net/nee5kxp.css"/>




    <BrowserView>
    <RemoveScrollBar/>
    <div style={{height:'100vh', backgroundColor:'#F1F1F1', width:'100vw', overflow:'clip'}}>
      <div style={{position:'absolute', top:'10vh', left:'1vw', zIndex:'1'}}>
        <a href={base_link+'/login'}  style={{textDecoration: 'none', fontSize:'2vw', color:'black', paddingLeft:'2vw', fontFamily:'Quicksand'}}>Login</a>
      </div>

      <div style={{height:'10vh', textAlign:'left', left:'60vw', position: 'relative', top:'10vh', zIndex:'2', width:'40vw'}}>

        <a href={base_link+'/'}  style={{textDecoration: 'none', fontSize:'2vw', color:'black', paddingLeft:'2vw', fontFamily:'Quicksand'}}>Home</a>
        <a href={base_link+'/vis-menu'} className="nav-text" style={{color:'black', fontFamily:'Quicksand'}}>Menu</a>
        <a href={base_link+'/about'} className="nav-text" style={{color:'black', fontFamily:'Quicksand'}}>About Us</a>
        <a href={base_link+'/contact-us'} className="nav-text" style={{color:'black', fontFamily:'Quicksand'}}> Contact Us</a>
        <a href={base_link+'/cart'}>
          <ShoppingCart style={{position:'relative', left:'3vw', color:'black'}}/>
        </a>

      </div>
      <div style={{position:'absolute', display:'flex', bottom:'3vh', right:'2vw'}}>
        <img src={instagram} className='barimage' style={{height:'5vh', borderRadius:'.5vw'}}/>
        <img src={twitter} className='barimage' style={{height:'5vh', borderRadius:'.5vw', paddingRight:'1vw', paddingLeft:'1vw'}}/>
        <img src={facebook} className='barimage' style={{height:'5vh', borderRadius:'.5vw'}}/>
      </div>


      <div style={{display:'flex'}}>
        <div style={{width:'30vw'}}>
          <div style = {{position:'absolute', top:'20vh', left:'6vw', zIndex:'5', height:''}}>
            <div style={{fontSize:'13vw', fontFamily:'Niagara', position:'relative', top:'-4vh'}}>
              Han
            </div>
            <div style={{fontSize:'13vw', left:'6vw', position:'relative', fontFamily:'Niagara', top:'-12vh'}}>
              Bop
            </div>
          </div>
          <div style={{position:'absolute', top:'74vh', left:'6vw', width:'20vw', color:'grey', zIndex:'1', display:'flex'}}>
            
          <div style={{width:'10vw', borderTopStyle:'solid', color:'white', borderColor:'grey', position:'relative', top:'2vh'}}>
              
            </div>
            <div style={{fontFamily:'Dosis', fontSize:'2vh', position:'relative', left:'1vw'}}>
              It's more than a saying, it's a promise. It's food that feeds your cravings, supports your health and nourishes your soul - all in one bite But you'll want more than one. We're suire of it.</div>
            </div>


        </div>
        <header>
          {toggle1 && <img src={home_noodle} className='main-img-shadow' style={{width:'90vw', height:'90vh', objectFit:'contain', zIndex:'0', position:'absolute', left:'2vw', top:'9vh'}}/>}
          {toggle2 && <img src={home_c} style={{width:'80vw', height:'80vh', objectFit:'contain'}}/>}
          {toggle3 && <img src={home_bap} style={{width:'80vw', height:'80vh', objectFit:'contain'}}/>}
        </header>

        <div style={{position:'relative', top:'15vh', textAlign:'', width:'30vw', left:'50vw'}}>
        <a href={base_link+'/menu?product=korean'} style={{textDecoration:'none', color:'black'}}>
          <div className='trio'>
            <img src={home_bap} className='barimage'/>
            <div style={{textAlign:'left', top:'-10vh', position:'relative', paddingLeft:'10vw'}}>
              <div style={{fontFamily:'century-gothic', fontSize:'2vw', fontWeight:'700'}}>
                Korean Food
              </div>
              <div style={{textAlign:'left', fontFamily:'Dosis', fontSize:'1.5vw', fontWeight:'300', width:'15vw'}}>
                You can enjoy traditional sushi in a modern form
              </div>
            </div>         
          </div>
          </a>
          <a href={base_link+'/menu?product=sushi'}style={{textDecoration:'none', color:'black'}}>
          <div  className='trio' style={{position:'relative', top:'5vh'}}>
            <img src={home_c} className='barimage'/>
            <div style={{textAlign:'left', top:'-10vh', position:'relative', paddingLeft:'10vw'}}>
              <div style={{fontFamily:'century-gothic', fontSize:'2vw', fontWeight:'700'}}>
                Sushi
              </div>
              <div style={{textAlign:'left', fontFamily:'Dosis', fontSize:'1.5vw', fontWeight:'300', width:'15vw'}}>
                You can enjoy traditional sushi in a modern form
              </div>
            </div>
          </div>
          </a>
          <a href={base_link+'/menu?product=dishes'} style={{textDecoration:'none', color:'black'}}>
          <div className='trio' style={{position:'relative', top:'10vh'}}>
            <img src={home_noodle} className='barimage'/>
            <div style={{textAlign:'left', top:'-10vh', position:'relative', paddingLeft:'10vw'}}>
              <div style={{fontFamily:'century-gothic', fontSize:'2vw', fontWeight:'700'}}>
                Side Dishes
              </div>
              <div style={{textAlign:'left', fontFamily:'Dosis', fontSize:'1.5vw', fontWeight:'300', width:'15vw'}}>
                You can enjoy traditional sushi in a modern form
              </div>
            </div>          
          </div>
          </a>
        </div>   

      </div>


    </div>       
   
    </BrowserView>
    <MobileView>
      <div style={{height:'100vh', backgroundColor:'white'}}>
          <div style={{position:'absolute', width:'100vw'}}>
            <div style={{}}>
              <div style={{fontFamily:'Dosis', fontSize:'50px', color:'white', textAlign:'center'}}>
                Fresch Sushi
              </div>
              <div style={{fontFamily:'Dosis', textAlign:'center', fontSize:'100px', paddingTop:'5vh', borderBottomStyle:'solid', width:'90vw', marginRight:'auto',marginLeft:'auto', borderBottomColor:'white'}}>
                <a href={base_link+'/menu/?product=sushi'} style={{textDecoration: 'none'}}>
                  Sushi
                </a>
              </div>
              <div style={{fontFamily:'Dosis', textAlign:'center', fontSize:'100px', paddingTop:'5vh', borderBottomStyle:'solid', width:'90vw', marginRight:'auto',marginLeft:'auto', borderBottomColor:'white'}}>
              <a href={base_link+'/menu/?product=dishes'} style={{textDecoration: 'none'}}>
                  Dishes
                </a>
              </div>
              <div style={{fontFamily:'Dosis', textAlign:'center', fontSize:'100px', paddingTop:'5vh', borderBottomStyle:'solid', width:'90vw', marginRight:'auto',marginLeft:'auto', borderBottomColor:'white'}}>
                <a href={base_link+'/menu/?product=korean'} style={{textDecoration: 'none'}}>
                  Korean
                </a>
              </div>
            </div>
          </div>
          <img src={mb_bg_img} style={{position:'', height:'100vh', alignContent:'center', width:'100vw', objectFit:'cover'}}/>
          

    </div>

    </MobileView>

    </>
  );
}

export default Home;
