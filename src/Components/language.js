import React, { Component } from 'react'
import '../Css/style.css'
import Form from 'react-bootstrap/Form';


export class Language extends Component {
    constructor(){
        super();
         this.state ={
            selectValue:'',

        }
    }
    handleChange=(e)=>{
 this.setState({selectValue: e.target.value})
   console.log('ok',e.target.value)
    }
    render(){

        return (
        <div>
    <Form.Select  aria-label="Language"   onChange={this.props.onChange}  >
      {/* <option className="nav-item dropdown-item" > &nbsp; Language</option> */}
      <option className="nav-item dropdown-item" value="en">&nbsp; English</option>
      <option className="nav-item dropdown-item" value="ar">&nbsp; Arabic</option>
     
    </Form.Select>

        </div>
    )}
}
export default Language;