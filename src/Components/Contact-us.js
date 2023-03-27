import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import * as emailjs from 'emailjs-com'
import Modal from 'react-bootstrap/Modal';
import {withTranslation} from 'react-i18next'
import i18next from 'i18next';
import Navbar from './Navbar';
import {Helmet} from "react-helmet";

export class Contact extends Component {

  constructor(){
    super();
    this.state={
      Name:'',
      Email:'',
      Subject:'',
      Message:'',
      nameError:false,
      emailError:false,
      subjectError:false,
      messageError:false,
      Alert:false,
    }
  

  }
 
 submitEmail=(e)=>{
e.preventDefault();

if(this.state.Name.length<=5)
// ||this.state.Subject.length<=5||this.state.Message.length<=10)
{

  return this.setState({ nameError: !this.state.nameError });
  // this.setState.Error=true;
}if(this.state.Subject.length<=5){
  return  this.setState({ subjectError: !this.state.subjectError });
}
if(this.state.Message.length<=10){
  return  this.setState({ messageError: !this.state.messageError });

}
else{
  const { Name, Email, Subject,Message } = this.state
    let templateParams = {
      from_name: Name,
      to_name: Email,
      Subject: Subject,
      message: Message,
     }
     emailjs.send(
      'service_9s1bcdp',
      'template_rawufib',
       templateParams,
      '4XOhscpF46uxPywRm'
     ).then((result) => {

     this.setState({Alert: !this.state.Alert})
  }, (error) => {
      console.log(error.text);
  });
     this.resetForm()
 
    
  return this.setState.Error=false;
}

}
handleChange=(e)=>{
  i18next.changeLanguage(e.target.value);
  this.setState({selectValue: e.target.value})
  console.log('ok',e.target.value)
    }
resetForm() {
  this.setState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  })}
   handleClose=()=>{
    this.setState({Alert:!this.state.Alert});
 }
  render() {
   
    return (
     
      <div >
          <Helmet>
                <meta charSet="utf-8" />
                <title>Contact-Us </title>
                <meta name="keywords" content="#Want Carpenter Services Just contact-us" />
               <meta name="description" content="Get in touch with our expert carpenters in UAE today and discover how we can transform your space with custom-made furniture and woodworking designs" />   
                <link rel="canonical" href="http://Amjadcarpentry.com/catalogue" />
            </Helmet>
        <Navbar onChange={(e)=>{this.handleChange(e)}} />
  <div id="banner-area" className="banner-area" >
<div className="banner-text">
  <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <div className="banner-heading">
              <h1 className="banner-title">{this.props.t('CONTACT-US')}</h1>
           
            </div>
        </div>
      </div>
  </div>
</div>
</div>

<div className="container ts-service-area">
    <div className="row text-center">
      <div className="col-12">
        <h2 className="section-title">{this.props.t('Reaching our Office')}</h2>
        <h3 className="section-sub-title">{this.props.t('Find Our Location')}</h3>
      </div>
    </div>
    <div className="row">
      <div className="contact-us col-md-4">
        <div className="ts-service-box-bg text-center h-100">
          <span className="ts-service-icon icon-round">
            <i className="fas fa-map-marker-alt mr-0"></i>
          </span>
          <div className="ts-service-box-content">
            <h4>{this.props.t('Visit Our Office')}</h4>
            <p>Al-Ain Industrial Area  - Abu Dhabi </p>
          </div>
        </div>
      </div>

      <div className="contact-us col-md-4">
        <div className="ts-service-box-bg text-center h-100">
          <span className="ts-service-icon icon-round">
            <i className="fa fa-envelope mr-0"></i>
          </span>
          <div className="ts-service-box-content">
            <h4>{this.props.t('Email Us')}</h4>
            <p>AmjadCarpentery@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="contact-us col-md-4">
        <div className="ts-service-box-bg text-center h-100">
          <span className="ts-service-icon icon-round">
            <i className="fa fa-phone-square mr-0"></i>
          </span>
          <div className="ts-service-box-content">
            <h4>{this.props.t('Call Us')}</h4>
            <p>(+971) 507-937-361</p>
          </div>
        </div>
      </div>

    </div>


   
   <br/>
   <iframe title={'uniqueTitle'} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14558.557172821671!2d55.7600996!3d24.1843799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e481eed3a0cc870!2sAmjad%20Carpenter!5e0!3m2!1sen!2s!4v1672932033316!5m2!1sen!2s" 
   width="98%" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />




    <div className="row">
      <div className="col-md-12">   <br/>
        <h3 className="column-title">{this.props.t('We Love To Hear')}</h3>
       
        <Form  id="contact-form"  onSubmit={(e)=>{this.submitEmail(e)} }>
          <div className="error-container"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>{this.props.t('Name')}<sup>*</sup></label>
                <Form.Control type="text" name="Name" value={this.state.Name} onChange={(e)=>{this.setState({[e.target.name]:e.target.value}) }} minLength='5' required='true' placeholder="Enter Name" />
          {this.state.nameError? 
             <label><sup>*</sup>Name is required</label>:''}
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>{this.props.t('Email')}<sup>*</sup></label>
                <Form.Control type="email" name="Email" value={this.state.Email} onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}} required='true' placeholder="Enter email" />
                {this.state.emailError? 
             <label><sup>*</sup>Email is required</label>:''}
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>{this.props.t('Subject')}<sup>*</sup></label>
                <Form.Control type="text" name="Subject" value={this.state.Subject} onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}} minLength='5' required='true' placeholder="Subject" />
                {this.state.subjectError? 
             <label><sup>*</sup>Subject is required</label>:''}
              </div>
            </div>
          </div>   <br/>
       
          <div className="form-group messagebox">
            <label>{this.props.t('Message')}</label>  
            <br/>
            <Form.Control as="textarea" type='text' name="Message" value={this.state.Message} onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}}    rows={10}  />
          </div>
          <div className="text-right"><br/>
            <button className="btn btn-primary " type="submit">{this.props.t('Send Message')}</button>
       
          </div>
        </Form>
        {this.state.Alert? 
           <Modal show={this.state.Alert}>
           <Modal.Header closeButton onHide={this.handleClose}>
             <Modal.Title>Email Send Successfully</Modal.Title>
           </Modal.Header>
           <Modal.Body> We get back to you soon thanks</Modal.Body>
         
         </Modal>
        :''}
      </div>

    </div>

     
 </div></div>
    )
  }
}

export default withTranslation() (Contact)