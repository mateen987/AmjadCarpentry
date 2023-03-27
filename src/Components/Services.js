import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {withTranslation} from 'react-i18next'
import i18next from 'i18next';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
export class Services extends Component {

  handleChange=(e)=>{
    i18next.changeLanguage(e.target.value);
    this.setState({selectValue: e.target.value})
    
      }
       doorManufacturing=()=>{
        console.log('okok');
      
   
      
        }
  render() {

    return (
       <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Contact-Us </title>
                <meta name="keywords" content="#Looking for best Carpenter Services " />
               <meta name="description" content="Discover our comprehensive range of carpentry services in UAE, including custom furniture making, joinery, woodwork, and more." />   
                <link rel="canonical" href="http://Amjadcarpentry.com/catalogue" />
            </Helmet>
        <Navbar onChange={(e)=>{this.handleChange(e)}} />
      <div id="banner-area" className="banner-area" >
<div className="banner-text">
  <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <div className="banner-heading">
              <h1 className="banner-title">{this.props.t('Services')}</h1>
           
            </div>
        </div>
      </div>
  </div>
</div>
</div>

<div className='container ts-service-area'>
<div class="row text-center ">
        <div class="col-12">
          <h2 class="section-title">{this.props.t('OUR SERVICES')}</h2>
          <h3 class="section-sub-title">{this.props.t('What We Offer')}</h3>
        </div>
    </div>
    <Row>    
        <Col className="Services col-lg-4 col-md-6  col-sm-12">
          <Card onClick={()=> this.doorManufacturing()} >
            <Card.Img class="card-img" variant="top" src="./assets/Services/Wooden-Door.jpeg" alt="team-img" />
            <Card.Body>
              <Card.Title>{this.props.t('footerServices')}</Card.Title>
              <Card.Text>
             {this.props.t('Door Manufacturing Paragraph')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-lg-4 col-md-6  col-sm-12">
          <Card>
            <Card.Img class="card-img" variant="top" src="./assets/Services/door-maintenance.jpeg" alt="team-img" />
            <Card.Body>
              <Card.Title>{this.props.t('footerServices1')} </Card.Title>
              <Card.Text>
              {this.props.t('Door Maintenance Paragraph')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col className="col-lg-4 col-md-6  col-sm-12">
          <Card>
            <Card.Img class="card-img" variant="top" src="./assets/Services/wooden-shelve.jpeg" alt="team-img" />
            <Card.Body>
              <Card.Title>{this.props.t('footerServices2')}</Card.Title>
              <Card.Text>
              {this.props.t('Wooden Shelves Paragraph')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-lg-4 col-md-6 mb-4 col-sm-12">
          <Card>
            <Card.Img class="card-img" variant="top" src="./assets/Services/Aluminium.jpeg" alt="team-img" />
            <Card.Body>
              <Card.Title>{this.props.t('footerServices3')}</Card.Title>
              <Card.Text>
              {this.props.t('Aluminium Doors Paragraph')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-lg-4 col-md-6 mb-4 col-sm-12">
          <Card>
            <Card.Img class="card-img" variant="top" src="./assets/Services/Kitchen.jpeg" alt="team-img" />
            <Card.Body>
              <Card.Title>{this.props.t('footerServices4')}</Card.Title>
              <Card.Text>
              {this.props.t('Kitchen Cabinet paragraph')} 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


       


        <Col className="col-lg-4 col-md-6 mb-4 col-sm-12">
          <Card>
            <Card.Img class="card-img" variant="top" src="./assets/Services/Wooden-Table.webp" alt="team-img" />
            <Card.Body>
              <Card.Title>{this.props.t('Custom Wooden table')}</Card.Title>
              <Card.Text>
              {this.props.t('Custom Wooden table paragraph')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* <Col className="col-lg-4 col-md-6 mb-4 col-sm-12">
          <Card>
            <Card.Img class="card-img" variant="top" src="./assets/Services/Glass-Door.jpeg" alt="team-img" />
            <Card.Body>
              <Card.Title>Custom Renovation</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}

        <Col className="col-lg-4 col-md-6 mb-4 col-sm-12">
          <Card>
            <Card.Img class="card-img" variant="top" src="./assets/Services/Glass-Door.jpeg" alt="team-img" />
            <Card.Body>
              <Card.Title>{this.props.t('Glass Work')}</Card.Title>
              <Card.Text>
              {this.props.t('Glass Work paragraph')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col className="col-lg-4 col-md-6 mb-4 col-sm-12">
          <Card>
            <Card.Img class="card-img"variant="top" src="./assets/Services/wooden-bed.jpg"  alt="team-img" />
            <Card.Body>
              <Card.Title>{this.props.t('Wooden Bed Maintenanice')}</Card.Title>
              <Card.Text>
              {this.props.t('Wooden Bed Maintenanice paragraph')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>

              </div>

</div>

    )
  }
}

export default  withTranslation()(Services) 