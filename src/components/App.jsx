
import React, { Component } from "react";
import Styles from 'components/Container/Container.module.css'
 import Searchbar from "./Searchbar/Searchbar";
 import pixabayApi from 'services/pixabay-api';
 import ImageGallery from "./ImageGallery/ImageGallery";
import ButtonLoadMore from "./Button/ButtonLoadMore";
import Loader from "./Loader/Loader";

import Modal from "./Modal/Modal";


export default class App extends Component {
  state = {
    query : '',
    page: 1,
     images: [],
    isLoading: false,
    error: null,
    ShowModal: false,
    largeImageURL: '',
   

  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if(page !== prevState.page || query !== prevState.query){
this.setState({ isLoading: true })
pixabayApi.fetchImages( query, page ).then(data => this.setState({ images: data.hits, isloading:false}))
.catch(error => this.setState({ error })).finally(() => {
  					this.setState({ isLoading: false })
  				})
    }
  
   
  }
  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleFormSubmit = query => {
    this.setState({ query });
   }
   toggleModal = ({ largeImageURL = '' } = {}) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: largeImageURL,
      
    }));
  };


  render() {
const {images, largeImageURL,showModal, isLoading} = this.state;
console.log(images.length)
    return (
      <div className={Styles.container} >
          <Searchbar onSubmit={this.handleFormSubmit}/> 
        
          {images.length > 0 ?<ImageGallery imageList ={images} openModal={this.toggleModal}/>: null}
          {isLoading && <Loader/>}
          {showModal && (
          <Modal closeModal={this.toggleModal} largeImageURL={largeImageURL} />
        )}
{images.length > 11 ? <ButtonLoadMore incrementPage={this.incrementPage} LoadBtnHide={this.LoadBtnHide}/> : null}
     
      </div>
    );
  }}
    