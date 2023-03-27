import React, { Component } from 'react'
import {withTranslation} from 'react-i18next';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
export class Footer extends Component {
  handleChange=(e)=>{
    i18next.changeLanguage(e.target.value);
    this.setState({selectValue: e.target.value})
    console.log('ok',e.target.value)
      }

  render() {
    return (
      <div>
      <footer id="footer" className="footer bg-overlay">
      <div className="footer-main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 footer-widget footer-about">
              <h3 className="widget-title">{this.props.t('About Us')}</h3>
              {/* <img loading="lazy" width="200px" className="footer-logo" src="images/footer-logo.png" alt="Constra"/> */}
              <p>{this.props.t('footerparagraph')}
              </p>
              <p>
                <Link className="nav-link" to="/catalogue"> {this.props.t('CONTACT-US')}&nbsp;&nbsp;&nbsp;{this.props.t('contact number')} 
                </Link>    </p>
              <div className="footer-social">
                <ul>
                  <li><a href="https://facebook.com/themefisher" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                  {/* <li><a href="https://twitter.com/themefisher" aria-label="Twitter"><i className="fab fa-twitter"></i></a> */}
                  {/* </li> */}
                  <li><a href="https://instagram.com/themefisher" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                  {/* <li><a href="https://github.com/themefisher" aria-label="Github"><i className="fab fa-github"></i></a></li> */}
                </ul>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <h3 className="widget-title">{this.props.t('Working Hours')}</h3>
              <div className="working-hours">
             {this.props.t('footerTiming')}
                <br/>
                <br/> 
                {this.props.t('workdays')} <span className="text-right">{this.props.t('time')} </span>
                {/* <br/> Saturday: <span className="text-right">12:00 - 15:00</span> */}
                <br/> {this.props.t('weekend')} <span className="text-right">09:00 - 12:00</span>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <h3 className="widget-title">{this.props.t('Services')}</h3>
              <ul className="list-arrow">
                <li>
                <Link className="nav-link" to="/catalogue">{this.props.t('footerServices')}</Link>
                  {/* <a href="services">{this.props.t('footerServices')}</a> */}
                  </li>
                <li>
                <Link className="nav-link" to="/catalogue">{this.props.t('footerServices1')}</Link>
               </li>
                <li>
                <Link className="nav-link" to="/catalogue">{this.props.t('footerServices2')}</Link>
                </li>
                <li>
                <Link className="nav-link" to="/catalogue">{this.props.t('footerServices3')}</Link>
                </li>
                <li>
                <Link className="nav-link" to="/catalogue">{this.props.t('footerServices4')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      {/* <div className="copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright-info">
                <span>Copyright © <script>
                    document.write(new Date().getFullYear())
                  </script>2022, Designed &amp; Developed by <a href="https://themefisher.com">Themefisher</a></span>
              </div>
            </div> */}
  
            {/* <div className="col-md-6">
              <div className="footer-menu text-center text-md-right">
                <ul className="list-unstyled">
                  <li><a href="about.html">About</a></li>
                  <li><a href="team.html">Our people</a></li>
                  <li><a href="faq.html">Faq</a></li>
                  <li><a href="news-left-sidebar.html">Blog</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                </ul>
              </div>
            </div>
          </div> */}
  
          {/* <div id="back-to-top" data-spy="affix" data-offset-top="10" className="back-to-top position-fixed" style="display: block;"> */}
            {/* <button className="btn btn-primary" title="Back to Top">
              <i className="fa fa-angle-double-up"></i>
            </button> */}
          {/* </div>  */}
          {/* </div> */}
    {/* </div> */}
        </footer>
        </div>
     
    )
  }
}

export default withTranslation() (Footer)
