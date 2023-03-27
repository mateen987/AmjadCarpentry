import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {withTranslation} from 'react-i18next'
import i18next from 'i18next';
import Navbar from './Navbar';
import {Helmet} from "react-helmet";
export class Faq extends Component {

  constructor(){
    super();
    this.closeLightbox = () => {
      this.state.open = true;
    };
  }
  handleChange=(e)=>{
    i18next.changeLanguage(e.target.value);
    this.setState({selectValue: e.target.value})
    console.log('ok',e.target.value)
      }
  render() {  
   
    return (
      <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Catalogue </title>
                <meta name="keywords" content="#Carpenter design catalogue in UAE" />
               <meta name="description" content="Explore our extensive catalogue of custom-made furniture and woodworking designs in UAE." />   
                <link rel="canonical" href="http://Amjadcarpentry.com/catalogue" />
            </Helmet>
        <Navbar onChange={(e)=>{this.handleChange(e)}} />
      <div id="banner-area" className="banner-area" >
<div className="banner-text">
  <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <div className="banner-heading">
              <h1 className="banner-title">{this.props.t('Catalogue')}</h1>
              {/* <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/">company</a></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                  </ol>
              </nav> */}
            </div>
        </div>
      </div>
  </div>
</div>
</div>

<div className='container ts-service-area'>
<div className="row text-center ">
        <div className="col-12">
          <h2 className="section-title">{this.props.t('OUR SERVICES')}</h2>
          <h3 className="section-sub-title">{this.props.t('What We Offer')}</h3>
        </div>
    </div>
    <Tabs defaultActiveKey="first"  fill className='tabs mb-5'>
        <Tab eventKey="first" title={this.props.t('Wooden Door')}>
        <div className="row">


<div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#fancy-door">
                     <img loading="lazy" className=" img-fluid card-img w-100 h-100" src="./assets/Catalogue/Wood/fancy-door.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="fancy-door" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/Wood/fancy-door.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                      <h3 className="ts-name" >AC-001</h3>
 
                    </div>
                </div>
              </div>
              </div>



              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#double-wood-door">
                     <img loading="lazy" className=" img-fluid card-img w-100 h-100" src="./assets/Catalogue/Wood/double-wood-door.webp" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="double-wood-door" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/Wood/double-wood-door.webp" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-002</h3>
 
                    </div>
                </div>
              </div>
              </div>




              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#slide-door">
                     <img loading="lazy" className=" img-fluid card-img w-100 h-100" src="./assets/Catalogue/Wood/slide-door.jpg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="slide-door" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/Wood/slide-door.jpg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-003</h3>
 
                    </div>
                </div>
              </div>
              </div>



              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#interior-door">
                     <img loading="lazy" className=" img-fluid card-img w-100 h-100" src="./assets/Catalogue/Wood/interior-door.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="interior-door" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/Wood/interior-door.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-004</h3>
 
                    </div>
                </div>
              </div>
              </div>






              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#mainstylishdoor">
                     <img loading="lazy" className=" img-fluid card-img w-100 h-100" src="./assets/Catalogue/Wood/mainstylishdoor.webp" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="mainstylishdoor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/Wood/mainstylishdoor.webp" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-005</h3>
 
                    </div>
                </div>
              </div>
              </div>






              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#white-internal-door">
                     <img loading="lazy" className=" img-fluid card-img w-100 h-100" src="./assets/Catalogue/Wood/white-internal-door.jpg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="white-internal-door" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/Wood/white-internal-door.jpg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-006</h3>
 
                    </div>
                </div>
              </div>
              </div>




    <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#door1">
                     <img loading="lazy" className=" img-fluid card-img w-100 h-100" src="./assets/Catalogue/Wood/door1.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="door1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/Wood/door1.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-007</h3>
 
                    </div>
                </div>
              </div>
              </div>
             
              

              
            
              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#door2">
                     <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/Wood/door2.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="door2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="w-100 card-height" src="./assets/Catalogue/Wood/door2.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-008</h3>
 
                    </div>
                </div>
              </div>
              </div>


              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#door3">
                     <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/Wood/door3.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="door3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="w-100" src="./assets/Catalogue/Wood/door3.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-009</h3>
 
                    </div>
                </div>
              </div>
              </div>


              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#door4">
                     <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/Wood/door4.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="door4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="w-100" src="./assets/Catalogue/Wood/door4.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-010</h3>
 
                    </div>
                </div>
              </div>
              </div>


              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#door5">
                     <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/Wood/door5.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="door5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="w-100" src="./assets/Catalogue/Wood/door5.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-011</h3>
 
                    </div>
                </div>
              </div>
              </div>



              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#door6">
                     <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/Wood/door6.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="door6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className=" card-height w-100" src="./assets/Catalogue/Wood/door6.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-012</h3>
 
                    </div>
                </div>
              </div>
              </div>    


              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#door7">
                     <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/Wood/door7.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="door7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="w-100" src="./assets/Catalogue/Wood/door7.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-013</h3>
 
                    </div>
                </div>
              </div>
              </div>

              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#door8">
                     <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/Wood/door8.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="door8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/Wood/door8.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-014</h3>
 
                    </div>
                </div>
              </div>
              </div>






              <div className='Services col-lg-4 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#door10">
                     <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/Wood/door10.jpeg" alt="team-img"/>  
                    </div>
                  
  <div class="modal fade" id="door10" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/Wood/door10.jpeg" alt="team-img"/>  
   
      </div>
      
    </div>
  </div>
</div>              
  <div className="card-title ts-team-contents">
                       <h3 className="ts-name" >AC-015</h3>
 
                    </div>
                </div>
              </div>
              </div>






              </div>
        </Tab>

{/* Cabinet Tab start here */}






        <Tab eventKey="second" title={this.props.t('Wooden Cabinet')}>
        <div className="row">


<div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#wardobe1">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Wardobe/wardrobe1.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="wardobe1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Wardobe/wardrobe1.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                   <h3 className="ts-name" >WC-001</h3>
               
                </div>
            </div>
          </div>
          </div>
         
          

           <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#America-Modern-House-Furniture-Walk-in-Closet-New-Designs-Clothes">
                 <img loading="lazy" className="card-img w-100" src="./assets/Wardobe/America-Modern-House-Furniture-Walk-in-Closet-New-Designs-Clothes.webp" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="America-Modern-House-Furniture-Walk-in-Closet-New-Designs-Clothes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Wardobe/America-Modern-House-Furniture-Walk-in-Closet-New-Designs-Clothes.webg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                   <h3 className="ts-name" >WC-002</h3>
               
                </div>
            </div>
          </div>
          </div>






          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#cabinebedroom-cabinett6">
                 <img loading="lazy" className="card-img w-100" src="./assets/Wardobe/bedroom-cabinet.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="bedroom-cabinet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Wardobe/bedroom-cabinet.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                   <h3 className="ts-name" >WC-003</h3>
               
                </div>
            </div>
          </div>
          </div>







           <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#tv-lawn">
                 <img loading="lazy" className="card-img w-100" src="./assets/Wardobe/tv-lawn.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="tv-lawn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Wardobe/tv-lawn.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                   <h3 className="ts-name" >WC-004</h3>
               
                </div>
            </div>
          </div>
          </div>
          
        
          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#wardobe2">
                 <img loading="lazy" className="card-img w-100" src="./assets/Wardobe/cabinetdressing.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="wardobe2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="w-100 card-height" src="./assets/Wardobe/cabinetdressing.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                   <h3 className="ts-name" >WC-005</h3>
               
                </div>
            </div>
          </div>
          </div>


          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#cabinet2">
                 <img loading="lazy" className="card-img w-100" src="./assets/Wardobe/cabinet2.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="cabinet2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Wardobe/cabinet2.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >WC-006</h3>
               
                </div>
            </div>
          </div>
          </div>


<div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#bedroom-clothing">
                 <img loading="lazy" className="card-img w-100" src="./assets/Wardobe/bedroom-clothing.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="bedroom-clothing" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Wardobe/bedroom-clothing.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >WC-007</h3>
               
                </div>
            </div>
          </div>
          </div>




           <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#Cover-13-1">
                 <img loading="lazy" className="card-img w-100" src="./assets/Wardobe/Cover-13-1.avif" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="Cover-13-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Wardobe/Cover-13-1.avif" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >WC-008</h3>
               
                </div>
            </div>
          </div>
          </div>






           <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#Luxury-Wardrobe-Design">
                 <img loading="lazy" className="card-img w-100" src="./assets/Wardobe/Luxury-Wardrobe-Design.jpg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="Luxury-Wardrobe-Design" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Wardobe/Luxury-Wardrobe-Design.jpg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >WC-009</h3>
               
                </div>
            </div>
          </div>
          </div>



          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#cabinet4">
                 <img loading="lazy" className="img-fluid card-img w-100 h-100" src="./assets/Wardobe/cabinet4.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="cabinet4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height img-fluid w-100 " src="./assets/Wardobe/cabinet4.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >WC-010</h3>
               
                </div>
            </div>
          </div>
          </div>


          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#cabinet5">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Wardobe/cabinet5.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="cabinet5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Wardobe/cabinet5.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >WC-011</h3>
               
                </div>
            </div>
          </div>
          </div>



          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#cabinet6">
                 <img loading="lazy" className="card-img w-100" src="./assets/Wardobe/cabinet6.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="cabinet6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Wardobe/cabinet6.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >WC-012</h3>
               
                </div>
            </div>
          </div>
          </div>
          
          </div>



        </Tab>
        <Tab eventKey="third" title={this.props.t('Aluminium Doors')}>
        <div className="row">


<div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium1">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/aluminium-door/1.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/aluminium-door/1.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >AD-001</h3>
               
                </div>
            </div>
          </div>
          </div>
         
          

          
        
          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium2">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/aluminium-door/2.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="w-100 card-height" src="./assets/Catalogue/aluminium-door/2.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >AD-002</h3>
               
                </div>
            </div>
          </div>
          </div>


          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium3">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/aluminium-door/3.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/aluminium-door/3.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >AD-003</h3>
               
                </div>
            </div>
          </div>
          </div>

          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium4">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/aluminium-door/4.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/aluminium-door/4.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >AD-004</h3>
               
                </div>
            </div>
          </div>
          </div>



          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium5">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/aluminium-door/5.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/aluminium-door/5.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >AD-005</h3>
               
                </div>
            </div>
          </div>
          </div>





          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium6">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/aluminium-door/6.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/aluminium-door/6.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >AD-006</h3>
               
                </div>
            </div>
          </div>
          </div>




          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium7">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/aluminium-door/7.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/aluminium-door/7.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >AD-007</h3>
               
                </div>
            </div>
          </div>
          </div>





          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper img-fluid" data-bs-toggle="modal" data-bs-target="#aluminium8">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/aluminium-door/8.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/aluminium-door/8.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >AD-008</h3>
               
                </div>
            </div>
          </div>
          </div>






         


          </div>
        </Tab>
        <Tab eventKey="four" title={this.props.t('Glass Works')}>
        <div className="row">


<div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#glassWork1">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/glassWork/glassWork-2.webp" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="glassWork1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/glassWork/glassWork-2.webp" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-001</h3>
               
                </div>
            </div>
          </div>
          </div>
         
          

          
        
          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#glasswork2">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/glassWork/glassWork-3.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="glasswork2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="w-100 card-height" src="./assets/Catalogue/glassWork/glassWork-3.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-002</h3>
               
                </div>
            </div>
          </div>
          </div>


          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#partitionglassWork">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/glassWork/partitionglassWork.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="partitionglassWork" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/glassWork/partitionglassWork.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-003</h3>
               
                </div>
            </div>
          </div>
          </div>


          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminiumdoor">
                 <img loading="lazy" className="img-fluid card-img w-100 h-100" src="./assets/Catalogue/glassWork/aluminiumdoor.webp" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminiumdoor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height img-fluid w-100 " src="./assets/Catalogue/glassWork/aluminiumdoor.webp" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-004</h3>
               
                </div>
            </div>
          </div>
          </div>


          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#buildingglassWork">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/glassWork/buildingglassWork.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="buildingglassWork" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/glassWork/buildingglassWork.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-005</h3>
               
                </div>
            </div>
          </div>
          </div>



          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#villaGlass">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/glassWork/villaGlass.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="villaGlass" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Catalogue/glassWork/villaGlass.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-006</h3>
               
                </div>
            </div>
          </div>
          </div>
          



          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#glassvilla">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/glassWork/glassvilla.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="glassvilla" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Catalogue/glassWork/glassvilla.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-007</h3>
               
                </div>
            </div>
          </div>
          </div>








          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#villaglassWork">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/glassWork/villaglassWork.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="villaglassWork" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Catalogue/glassWork/villaglassWork.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-008</h3>
               
                </div>
            </div>
          </div>
          </div>


          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#villaglassWorks">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/glassWork/villaglassWorks.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="villaglassWorks" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Catalogue/glassWork/villaglassWorks.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-009</h3>
               
                </div>
            </div>
          </div>
          </div>


          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#glassWork-1">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/glassWork/glassWork-1 .png" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="glassWork-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Catalogue/glassWork/glassWork-1 .png" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-010</h3>
               
                </div>
            </div>
          </div>
          </div>



          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#glassWorkvillas">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/glassWork/glassWorkvillas.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="glassWorkvillas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Catalogue/glassWork/glassWorkvillas.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-011</h3>
               
                </div>
            </div>
          </div>
          </div>




          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#Bathroom-Glass-Partitions">
                 <img loading="lazy" className="card-img w-100" src="./assets/Catalogue/glassWork/Bathroom-Glass-Partitions.jpg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="Bathroom-Glass-Partitions" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height card-img w-100" src="./assets/Catalogue/glassWork/Bathroom-Glass-Partitions.jpg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >GW-012</h3>
               
                </div>
            </div>
          </div>
          </div>


          </div>
        </Tab>
        <Tab eventKey="five" title={this.props.t('Kitchen')}>
        <div className="row">


<div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#Aluminium-Kitchen-Cabinet">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/Aluminium-Kitchen-Cabinet.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="Aluminium-Kitchen-Cabinet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/Aluminium-Kitchen-Cabinet.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-001</h3>
               
                </div>
            </div>
          </div>
          </div>
         
          

          
        
        
          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium-kitchen-dark">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/aluminium-kitchen-dark.webp" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium-kitchen-dark" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/aluminium-kitchen-dark.webp" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-002</h3>
               
                </div>
            </div>
          </div>
          </div>



          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium-kitchen-simple">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/aluminium-kitchen-simple.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium-kitchen-simple" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/aluminium-kitchen-simple.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-003</h3>
               
                </div>
            </div>
          </div>
          </div>



          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#aluminium-kitchen-wood">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/aluminium-kitchen-wood.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="aluminium-kitchen-wood" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/aluminium-kitchen-wood.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-004</h3>
               
                </div>
            </div>
          </div>
          </div>




          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#Aluminium-Kitchen">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/Aluminium-Kitchen.jpg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="Aluminium-Kitchen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/Aluminium-Kitchen.jpg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-005</h3>
               
                </div>
            </div>
          </div>
          </div>




          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#Kitchen21">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/Kitchen21.jpg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="Kitchen21" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/Kitchen21.jpg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-006</h3>
               
                </div>
            </div>
          </div>
          </div>




          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#Water-Resistant-Furniture-Readymade-White-Kitchen-Cabinets">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/Water-Resistant-Furniture-Readymade-White-Kitchen-Cabinets.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="Water-Resistant-Furniture-Readymade-White-Kitchen-Cabinets" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/Water-Resistant-Furniture-Readymade-White-Kitchen-Cabinets.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-007</h3>
               
                </div>
            </div>
          </div>
          </div>






          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#simple kitchen-cabinet">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/simple kitchen-cabinet.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="simple kitchen-cabinet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/simple kitchen-cabinet.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-008</h3>
               
                </div>
            </div>
          </div>
          </div>



          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#dark-kitchen">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/dark-kitchen.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="dark-kitchen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/dark-kitchen.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-009</h3>
               
                </div>
            </div>
          </div>
          </div>

          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#kitchen-draw">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/kitchen-draw.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="kitchen-draw" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/kitchen-draw.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-010</h3>
               
                </div>
            </div>
          </div>
          </div>


        
          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#abu-dhabi-kitchen">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/abu-dhabi-kitchen.webp" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="abu-dhabi-kitchen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/abu-dhabi-kitchen.webp" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-011</h3>
               
                </div>
            </div>
          </div>
          </div>

         

          <div className='Services col-lg-4 col-md-6'>
<div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
            <div className="ts-team-wrapper">
                <div className="team-img-wrapper" data-bs-toggle="modal" data-bs-target="#kitchen-images-draw-design">
                 <img loading="lazy" className=" card-img w-100" src="./assets/Catalogue/kitchen/kitchen-images-draw-design.jpeg" alt="team-img"/>  
                </div>
              
<div class="modal fade" id="kitchen-images-draw-design" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
 
  <div class="modal-body">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  <img loading="lazy" className="card-height w-100" src="./assets/Catalogue/kitchen/kitchen-images-draw-design.jpeg" alt="team-img"/>  

  </div>
  
</div>
</div>
</div>              
<div className="card-title ts-team-contents">
                  <h3 className="ts-name" >KE-012</h3>
               
                </div>
            </div>
          </div>
          </div>




         
          
          </div>
        </Tab>
      </Tabs>

              </div>

</div>
    )
  }
}

export default withTranslation() (Faq)