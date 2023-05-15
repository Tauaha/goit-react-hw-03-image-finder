import PropTypes from 'prop-types';
import Styles from 'components/Button/ButtonLoadMore.module.css'

const ButtonLoadMore =({incrementPage}) =>{
    return (
        <div className={Styles.Button_container}>
            <button type="button" onClick={incrementPage} className={Styles.Button}> 
            Load more
            </button>
        </div>
    )
}
ButtonLoadMore.propTypes ={
    incrementPage: PropTypes.func.isRequired,
 
 }       
export default ButtonLoadMore