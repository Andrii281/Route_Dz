import React, { Component } from 'react';
import Contact from '../contact';
import './style.css';

class Contacts extends Component{
    state = {
        filter: '',
        manFilter: true,
        womanFilter: true,
        unknownFilter: true,
    }

    saveInpuValue = (e) =>{
        this.setState({
          filter: e.target.value,
        })
      }
      
      onClickManCheckBox = () => {
        this.setState({
          manFilter: !this.state.manFilter,
        })
      }
      
      onClickWomanCheckBox = () => {
        this.setState({
          womanFilter: !this.state.womanFilter,
        })
      }
      
      onClickUknownCheckBox = () => {
        this.setState({
          unknownFilter: !this.state.unknownFilter,
        })
      }



render(){
    const regex  = new RegExp(this.state.filter, 'g');
    
    let data = this.state.filter === '' ? this.props.contacts : this.props.contacts.filter(item => {
      let state = false;
      for(let key in item){
        state = regex.test(item[key]);
        if(state === true){
          break;
        }
      }
      return state;
    } );

    if(!this.state.manFilter){
       data = data.filter(item => {
      
      return item.gender === 'male' ? false : true;
     
    })
    }

    if(!this.state.womanFilter){
      data = data.filter(item => {
     
     return item.gender === 'female' ? false : true;
    
   })
   }

   if(!this.state.unknownFilter){
    data = data.filter(item => {
   
   return item.hasOwnProperty('gender') ? true : false;
  
 })
 }

    return (
        
        <div className="contactsBlock">
          <input className = "input" value = {this.state.filter} onChange = {this.saveInpuValue}></input>
          <div className='FilterBlock'>
            <input className = 'manFilter' type = 'checkbox' onChange = {this.onClickManCheckBox} checked = {this.state.manFilter}></input><span>Man</span>
            <input className = 'womanFilter' type = 'checkbox' onChange = {this.onClickWomanCheckBox} checked = {this.state.womanFilter}></input><span>Woman</span>
            <input className = 'unknownFilter' type = 'checkbox' onChange = {this.onClickUknownCheckBox } checked = {this.state.unknownFilter}></input><span>Unknown</span>
          </div>
            <div className = 'contactsList'>
                {data.map( (contact, key) => {
                            return(  
                                <Contact key = {key + contact} contact = {contact}/>
                            ) 
                        })}
            </div>
        </div>
      )
    }   
}
export default Contacts;