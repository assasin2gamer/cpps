// eslint-disable-next-line
//import logo from './logo.svg';
import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserView, MobileView} from 'react-device-detect';

import "@fontsource/dosis"
import "@fontsource/quicksand"


function Contact() {
  var base_link = window.location.origin;

  return (
   <div>
    <BrowserView>
    <div style={{height:'100vh', backgroundColor:'#F1F1F1', width:'100vw', overflow:'clip'}}>
    <div style={{height:'10vh', textAlign:'left', left:'55vw', position: 'relative', top:'10vh', zIndex:'2', width:'40vw'}}>

      <a href={base_link+'/'}  style={{textDecoration: 'none', fontSize:'30px', color:'black', paddingLeft:'30px', fontFamily:'Quicksand'}}>Home</a>
      <a href={base_link+'/vis-menu'} className="nav-text" style={{color:'black', fontFamily:'Quicksand'}}>Menu</a>
      <a href={base_link+'/about'} className="nav-text" style={{color:'black', fontFamily:'Quicksand'}}>About Us</a>
      <a href={base_link+'/contact-us'} className="nav-text" style={{color:'black', fontFamily:'Quicksand'}}> Contact Us</a>
      <a href={base_link+'/cart'}>
        <ShoppingCart style={{position:'relative', left:'3vw', color:'black'}}/>
      </a>

    </div>


      <div style={{display:'flex'}}>
        <div style={{width:'30vw'}}>
          <div style = {{position:'absolute', top:'20vh', left:'10vw', zIndex:'5'}}>
            <div style={{fontSize:'20vh', fontFamily:'Niagara'}}>
              Han
            </div>
            <div style={{fontSize:'20vh', left:'5vw', position:'relative', fontFamily:'Niagara', top:'-8vh'}}>
              Bop
            </div>
          </div>
          <div style={{position:'absolute', top:'70vh', left:'10vw', width:'20vw'}}>
            <div style={{fontFamily:'Dosis', fontSize:'2vh'}}>
              It's more than a saying, it's a promise. It's food that feeds your cravings, supports your health and nourishes your soul - all in one bite But you'll want more than one. We're suire of it.</div>
          </div>

        </div>

        <div style={{position:'relative', top:'20vh', width:'30vw', left:'20vw'}}>
            <div style={{fontFamily:'Dosis', fontSize:'5vh', borderBottomStyle:'solid'}}>Locations</div>
            <div style={{paddingTop:'2vh', fontFamily:'Dosis', fontSize:'2vh'}}> We are committed to bring traditional foods to the modern market,
                allowing customers to consume the best quality food, created by our
                locally sourced suppliers.
            </div>
            
            <div style={{fontFamily:'Dosis', fontSize:'5vh', borderBottomStyle:'solid'}}>Phone</div>
            <div style={{paddingTop:'2vh', fontFamily:'Dosis', fontSize:'2vh'}}>
                    (999)-999-9999
            </div>
            <div style={{fontFamily:'Dosis', fontSize:'5vh', borderBottomStyle:'solid'}}>Email</div>
            <div style={{paddingTop:'2vh', fontFamily:'Dosis', fontSize:'2vh'}}>
                    Fake.email@emailer.com
            </div>
            
        </div>
     

      </div>


    </div>
    </BrowserView>
    <MobileView>
     

    </MobileView>

    </div>
  );
}

export default Contact;
