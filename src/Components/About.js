import React, { Component } from 'react';
import {withTranslation} from 'react-i18next';
import i18next from 'i18next';
import Navbar from './Navbar';

export class About extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      selectValue:'',
    };
  }
  handleChange=(e)=>{
    this.setState({selectValue: e.target.value})
       i18next.changeLanguage(e.target.value);
      
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
        <Navbar onChange={(e)=>{this.handleChange(e)}} />
        <div id="banner-area" className="banner-area img-responsive" >
  <div className="banner-text">
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
              <div className="banner-heading">
                <h1 className="banner-title">{this.props.t('About Us')}</h1>
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
<div className='container'>
<div className="row">

        <div className="col-lg-6">  <br></br>  <br></br>
          <h3 className="column-title">{this.props.t('Who We Are')}</h3>
          <p>{this.props.t('beforeQuote')}</p>
          <blockquote><p>{this.props.t('quote')}</p></blockquote>
          <p> {this.props.t('afterQuote')} </p>
        </div>
        <div className=" col-lg-6 aboutImg">
        <img  loading="lazy" src="./assets/About-page.jpeg" alt="facts-img"/>
        </div>
        </div>

</div>
<section id="facts" className="facts-area dark-bg">
        <div className="container">
    <div className="facts-wrapper">
        <div className="row">
          <div className="col-md-3 col-sm-6 ts-facts">
              <div className="ts-facts-img">
                <img loading="lazy" src="./assets/fact1.png" alt="facts-img"/>
         
              </div>
              <div className="ts-facts-content">
              <br/>
                <h2 className="ts-facts-num"><span className="counterUp" data-count="1789">1789</span></h2>
                <h3 className="ts-facts-title">{this.props.t('Total Projects')}</h3>
              </div>
          </div>

          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
              <div className="ts-facts-img">
                <img loading="lazy" src="./assets/fact2.png" alt="facts-img"/>
              </div>
              <div className="ts-facts-content">       
              <br/>
                <h2 className="ts-facts-num"><span className="counterUp" data-count="647">647</span></h2>
                <h3 className="ts-facts-title">{this.props.t('Staff Members')}</h3>
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
  <div className='container'>
  <div className="row text-center d-flex align-items-center">
        <div class="col-12 mt-5">
          <h2 className="section-title mt-5">{this.props.t('QUALITY SERVICE')}</h2>
          <h3 className="section-sub-title">{this.props.t('PROFESSIONAL TEAM')}</h3>
        </div>
    </div>
  <div className=" Staff row">
    <div className='Staff col-lg-3 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img loading="lazy" className="w-100" src="./assets/mateen.jpg" alt="team-img"/>
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Abdul Mateen</h3>
                      <p className="ts-designation">Chief Operating Officer</p>
                      <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                      {/* <div className="team-social-icons">
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-facebook-f"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-google-plus"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-linkedin"></i></a>
                      </div> */}
                    </div>
                </div>
              </div>
              </div>
             
              <div className='Staff col-lg-3 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img loading="lazy" className="w-100" src="./assets/team1.jpeg" alt="team-img"/>
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Nats Stenman</h3>
                      <p className="ts-designation">Chief Operating Officer</p>
                      <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                      {/* <div className="team-social-icons">
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-facebook-f"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-google-plus"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-linkedin"></i></a>
                      </div> */}
                    </div>
                </div>
              </div>
              </div>

              <div className='Staff col-lg-3 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img loading="lazy" className="w-100" src="./assets/burhan.jpeg" alt="team-img"/>
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Muhammad Burhan</h3>
                      <p className="ts-designation">Chief Operating Officer</p>
                      <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                      {/* <div className="team-social-icons">
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-facebook-f"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-google-plus"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-linkedin"></i></a>
                      </div> */}
                    </div>
                </div>
              </div>
              </div>
              <div className=' Staff col-lg-3 col-md-6'>
  <div className="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" >
                <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img loading="lazy" className="w-100" src="./assets/team1.jpeg" alt="team-img"/>
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Nats Stenman</h3>
                      <p className="ts-designation">Chief Operating Officer</p>
                      <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                      {/* <div className="team-social-icons">
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-facebook-f"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-google-plus"></i></a>
                          <a target="_blank" href="/" tabindex="0"><i className="fab fa-linkedin"></i></a>
                      </div> */}
                    </div>
                </div>
              </div>
              </div>
            
              
              
              
              
              
              
              
              
              
              
              </div>
              </div>
      </div>
    )
  }
}

export default withTranslation()(About)