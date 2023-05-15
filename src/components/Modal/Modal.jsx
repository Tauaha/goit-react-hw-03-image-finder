import { Component } from 'react'
import PropTypes from 'prop-types';
import Styles from 'components/Modal/Modal.module.css'



class Modal extends Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handleESC)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleESC)
	}

	handleESC = (e) => {
		if (e.code === 'Escape') {
			this.props.closeModal()
		}
	}

    handleBackdropClick =(e) => {
        if (e.currentTarget === e.target) {
            this.props.closeModal();
          }
    }

	render() {
		return (
			<div className={Styles.Overlay} onClick={this.handleBackdropClick}>
				<div className={Styles.Modal}>
                <img src={this.props.largeImageURL} alt="" />			
				</div>
			</div>
		)
	}
}

Modal.propTypes ={
    closeModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired
 
 }    
export default Modal