
import PropTypes from 'prop-types';
import Styles from 'components/ImageGalleryItem/ImageGalleryItem.module.css'
const ImageGalleryItem =({imageList, openModal})=> {
    return(
        <div className={Styles.Image_container}>
             {imageList.map(({ id, webformatURL, largeImageURL }) => (
          <li key={id} className={Styles.ImageGalleryItem}  onClick={() => openModal({ largeImageURL })}>
             <img className={Styles.ImageGalleryItem_image} src={webformatURL}  alt="" width="370" />
          </li>
        ))}
        </div>
    )
}

ImageGalleryItem.propTypes ={
    openModal: PropTypes.func.isRequired,
    imageList: PropTypes.array.isRequired
 
 }        


export default ImageGalleryItem