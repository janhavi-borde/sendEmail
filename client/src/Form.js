import React, { Component } from 'react'
import axios from 'axios';
class Form extends Component {
    state={
        name:'',
        email:'',
        message:'',
        sent:false
    }
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        })
    }
    formSubmit=(e)=>{
        e.preventDefault();
        let data={
            name:this.state.name,
            email:this.state.email,
            message:this.state.message
        }
        axios.post('https://sheltered-fortress-08636.herokuapp.com/api/forma',data)
        .then(res=>{
            this.setState({
                sent:true,
            },this.resetForm())
        })
        .catch(()=>{
            console.log('message not send ')
        })

    }
    resetForm=()=>{
        this.setState({
            name:'',
            email:'',
            message:''
        })
        setTimeout(() => {
            this.setState({
                sent:false,
            })
        }, 3000);
    }
    render() { 
        return ( 
            <div className="container">
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input type="text" 
                        name="name" 
                        placeholder="name....." 
                        onChange={this.handleName} 
                        value={this.state.name}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email....." onChange={this.handleEmail} value={this.state.email}
                        ></input>
                    </div>
                    <div className="form-group textArea">
                        <label htmlFor="message">message</label>
                        <textarea type="text" name="message" placeholder="message..." onChange={this.handleMessage}
                        rows="5" cols="30"
                         value={this.state.message}
                         ></textarea>
                    </div>
                    <div className={this.state.sent?'msg msgAppear':'msg'}>
                        message has been sent
                    </div>
                    <button className="btn" type="submit">submit</button>
                </form>
            </div>
         );
    }
}
 
export default Form;