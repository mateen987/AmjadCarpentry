import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {withTranslation} from 'react-i18next'
import i18next from 'i18next';
import Navbar from './Navbar';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
export class Home extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      selectValue:''
    };
  
        
  }
 
 handleChange=(e)=>{
     i18next.changeLanguage(e.target.value);
     this.setState({selectValue: e.target.value})
     console.log('ok',e.target.value)
       }
    counter = (minimum, maximum) => {
        for (let count = minimum; count <= maximum; count++) {
            setTimeout(() => {
                this.setState({count})
            }, 1000);
     
        }
    }

    componentDidMount() {
        this.counter(0,30)
    }

  render() {

    return (
      <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Amjad carpentry</title>
                <meta name="keywords" content="#Carpenter Services in UAE" />
               <meta name="description" content="Looking for Best carpentry services in UAE? Our skilled carpenters provide top-quality furniture,Cabinet,Door,and woodwork services." />   
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<Navbar onChange={(e)=>{this.handleChange(e)}} />
     <Carousel>
      <Carousel.Item>
        <img className="d-block img-responsive w-100 " src="./assets/slider-1.webp"   alt="First slide"  />
        <Carousel.Caption> 
          <h1 className='slideText'>{this.props.t('SlideOne')}</h1>
          <h1 className='slidesText'> {this.props.t('CARPENTRY BUSINESS')}</h1>
        <div>
        <Button className="btn btn-warning secbtn"><Link className='nav-link btn-link' to="/services">{this.props.t('Our Services')}</Link></Button>
        <Button  className="btn-warning secbtn"><Link className='nav-link btn-link' to="/catalogue">{this.props.t('CONTACT-US')}</Link></Button>
          </div>  
       
         
        </Carousel.Caption>
   
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-responsive"  src="./assets/slider-2.webp"  alt="Second slide"/>
        <Carousel.Caption>
        {/* <button variant="secondary" className='secondSlideBt'>World Class Service</button> */}
          <h3 className='second-slideText'>{this.props.t('When Services Matters')}</h3>
          <h1 className='secondslideText'>{this.props.t('Your Choice is Simple')}</h1>
        <Button className='btn-warning secbtn secondSlideBtn '><Link className='nav-link btn-link' to="/services">{this.props.t('Our Services')}</Link></Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-responsive" src="./assets/slider-3.webp" alt="Third slide"  />

        <Carousel.Caption>
        <h3 className='thirdSlidesText'>{this.props.t('WE DEAL YOUR ALL KIND OF PROBLEMS  REQUIREMENTS')}</h3>
          <h1 className='thirdSlidesSText'> {this.props.t('WE BELIEVE  SUSTAINABILITY')}</h1>
        <Button  className='btn-warning secbtn ThirdSlideBtn'><Link className='nav-link btn-link' to="/contact">{this.props.t('CONTACT-US')}</Link></Button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      

     

        <section className='container' >

     
       
        <div className=' Banner d-flex'>
      <div className='col-md-8 text-md-left'>
        <h3 className='action-title bannerText'>{this.props.t('Let Discuss Your Needs & Requirements with Us')}</h3></div>
       <div className='col-md-4 text-center text-md-right '> 
       <button className="btn btn-dark solid blank" type="submit"><Link className='nav-link' to="/contact">{this.props.t('Send Message')}</Link></button>
       
       </div>
       </div>

        <div className='row'>
         <div className='about-Card col-md-6'>
          <h3>{this.props.t('About Us')}</h3>
          <h2 className='about-Us'>{this.props.t('WE DELIVER LANDMARK PROJECTS')}</h2>

          <p>{this.props.t('about-us-paragraph')}</p>

            
        <div className='gap'></div>
        <div className='row'>
        <div className='col-md-6'>
          <i className="fa-solid fas fa-trophy" />
        <p className='subtitle'> {this.props.t('We ve Repution for Excellence')}</p>
          </div>
         <div className='col-md-6'>
          <i className="fa-solid  fa-sliders-h" />
        <p className='subtitle'> {this.props.t('WE BUILD relationship')}</p>
          </div>
          <br></br>  <br></br>  <br></br>
         <div className='col-md-6'>
          <i className="fa-solid fa-thumbs-up" />
        <p className='subtitle'> {this.props.t('GUIDED BY COMMITMENT')}</p>
          </div>
         <div className='col-md-6'>
          <i className="fa-solid fa-people-group" />
        <p className='subtitle'> {this.props.t('A Team of Profesionals')}</p>
          </div>
        </div>
         </div>


         <div className='about-Card col-md-6'>
          <h2 className='about-Us'>{this.props.t('OUR VALUES')}</h2>
          <p>{this.props.t('our-value-paragraph')}</p>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       {this.props.t('Safety')}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {this.props.t('Safety-paragraph')}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      {this.props.t('Customer Service')}
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {this.props.t('customer-service-paragraph')}.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        {this.props.t('Integrity')}
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {this.props.t('integrity-paragraph')}
      </div>
    </div>
  </div>
</div>


         </div>

        </div>
      </section>
      <section id="facts" class="facts-area dark-bg">
  <div class="container">
    <div class="facts-wrapper">
        <div class="row">
          <div class="col-md-3 col-sm-6 ts-facts">
              <div class="ts-facts-img">
                <img loading="lazy" src="./assets/fact1.png" alt="facts-img"/>
         
              </div>
              <div class="ts-facts-content">
              <br/>
                <h2 class="ts-facts-num"><span class="counterUp" data-count="1789">1789</span></h2>
                <h3 class="ts-facts-title">{this.props.t('Total Projects')}</h3>
              </div>
          </div>

          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
              <div class="ts-facts-img">
                <img loading="lazy" src="./assets/fact2.png" alt="facts-img"/>
              </div>
              <div class="ts-facts-content">       
              <br/>
                <h2 class="ts-facts-num"><span class="counterUp" data-count="647">647</span></h2>
                <h3 class="ts-facts-title">{this.props.t('Staff Members')}</h3>
              </div>
          </div>

          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div className="ts-facts-img">
                <img loading="lazy" src="./assets/fact3.png" alt="facts-img"/>
              </div>
              <div className="ts-facts-content">
              <br/>
               <h2 className="ts-facts-num"><span class="counterUp" data-count="4000">4000</span></h2>
                <h3 className="ts-facts-title">{this.props.t('Hours of Work')}</h3>
              </div>
          </div>

          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div className="ts-facts-img">
                <img loading="lazy" src="./assets/fact4.png" alt="facts-img"/>
              </div>
              <div className="ts-facts-content">
              <br/>
              <h2 className="ts-facts-num"><span className="counterUp" data-count="44">{this.state.count}</span></h2>
                <h3 className="ts-facts-title">{this.props.t('Experience')}</h3>
              </div>
          </div>

        </div> 
    </div>
   
  </div>

</section>

<section id="ts-service-area" class="ts-service-area pb-0">
  <div className="container">
    <div className="row text-center d-flex align-items-center">
        <div class="col-12">
          <h2 className="section-title">{this.props.t('We Are Specialists In')}</h2>
          <h3 className="section-sub-title">{this.props.t('What We Do')}</h3>
        </div>
    </div>


    <div className="row service-box">
        <div className="col-lg-4">
          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="./assets/service-icon1.png" alt="service-icon" />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">{this.props.t('Wooden Door Manufacturing')}</h3>
                <p>{this.props.t('Door-manufacturing')}</p>
              </div>
          </div>

          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="./assets/service-icon2.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">{this.props.t('Cabinet Making')}</h3>
                <p>{this.props.t('cabinet-making')}</p>
              </div>
          </div>

          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="./assets/service-icon3.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">{this.props.t('Desk Manufacturing')}</h3>
                <p>{this.props.t('Desk')}</p>
              </div>
          </div>

        </div>

        <div className="col-lg-4 text-center">
          <img loading="lazy" className="img-fluid" src="./assets/service-center.jpeg" alt="service-avater-imag"/>
        </div>

        <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="./assets/service-icon4.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">{this.props.t('Aluminium Door Manufacturing')}</h3>
                <p>{this.props.t('Aluminium Door')}</p>
              </div>
          </div>

          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="./assets/service-icon5.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">{this.props.t('Aluminium Windows')}</h3>
                <p>{this.props.t('Aluminium-Windows-paragraph')} </p>
              </div>
          </div>
         
          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="./assets/service-icon6.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">{this.props.t('Glass Work')}</h3>
                <p>{this.props.t('Glass-Work')}</p>
              </div>
          </div>
        </div>
    </div>

  </div>

</section> 
      </div>
     
    

    )
  }
}

export default withTranslation()(Home)