
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Styles from 'components/ImageGallery/ImageGallery.module.css'

const ImageGallery = ({ imageList, openModal }) => {
   return (<ul className={Styles.ImageGallery}>
  
    <ImageGalleryItem imageList={imageList} openModal={openModal}/>
  </ul>)
}
     
  
ImageGallery.propTypes ={
    openModal: PropTypes.func.isRequired,
    imageList: PropTypes.array.isRequired
 
 }        



export default ImageGallery

