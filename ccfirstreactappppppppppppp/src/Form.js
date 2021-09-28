import React, { Component } from "react";    
import './Form.css'    
    
class Form extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            UserName: '',    
            emailId: '',          
            phoneNumber: '',       
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { UserName, emailId, phoneNumber } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //User name     
        if (!UserName) {    
            formIsValid = false;    
            formErrors["UserNameErr"] = "Name is required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }     
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
         
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { UserNameErr, emailIdErr, phoneNumberErr} = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} > Form </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="UserName">Name</label>    
                            <input type="text" name="UserName"    
                                value={this.state.UserName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={UserNameErr ? ' showError' : ''} />    
                            {UserNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{UserNameErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="emailId">Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                        
                         
                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>    
                        
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default Form;  