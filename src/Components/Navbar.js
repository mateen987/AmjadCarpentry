import i18next from 'i18next'
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../Css/style.css'
// import Language from './language'
import Form from 'react-bootstrap/Form';
export class Navbar extends Component {

constructor(){
  super();
  this.state ={
    selectValue:'',

}

//    this.handleChange=(e)=>{
//     console.log('ok',e.target.value)
//  i18next.changeLanguage(e.target.value);

//   }
  // this.handleChange=(e)=>{
  //   this.setState({selectValue: e.target.value})
  //   i18next.changeLanguage(e.target.value);

  //     console.log('ok',e.target.value)
  //      }
     

this.handleChange=(e)=>{
  i18next.changeLanguage(e.target.value);
  this.setState({selectValue: e.target.value})

     }
    }

  render() {
   
  
    return (
      <div>
<nav className="navbar fixed-top navbar-expand-lg  ">
  <div className="container container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <button className="navbar-toggler my-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item " >
          <Link className="nav-link "  aria-current="page" to="/">{this.props.t('Home')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{this.props.t('About')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">{this.props.t('Services')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalogue">{this.props.t('Catalogue')}</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/contact">{this.props.t('CONTACT-US')}</Link>
        </li>
      
       
      </ul>
     
      {/* <Language onChange={(e)=>{this.handleChange(e)}}/> */}
     <div> <Form.Select  aria-label="Language"  onChange={this.props.onChange}  >
     <option>{this.props.t('Language')}</option>
      <option className="nav-item dropdown-item" value="en">&nbsp; English</option>
      <option className="nav-item dropdown-item" value="ar">&nbsp; Arabic</option>
     
    </Form.Select></div>
    
    </div>

  </div>
</nav>

      </div>
      
    )
    
    
  }
  
}

export default withTranslation()(Navbar)