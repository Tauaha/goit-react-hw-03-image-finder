import { Component } from "react";
import React from "react";
import PropTypes from 'prop-types';
import Styles from 'components/Searchbar/Searchbar.module.css'


class Searchbar extends Component {
    state = {
        imageName: ' ',
      };
      handleNameChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
        
      };
    
      handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
      };

    render(){
return(
    <header className={Styles.searchbar}>
    <form className={Styles.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={Styles.SearchForm_button}> <span className={Styles.SearchForm_label}>Search</span></button>
        <input  type="text"
        className={Styles.input}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="imageName"
          value={this.state.imageName}
          onChange={this.handleNameChange}/>
      
    </form>
    </header>
)
    }
}
Searchbar.propTypes ={
    onSubmit: PropTypes.func.isRequired
 
 }        


export default Searchbar