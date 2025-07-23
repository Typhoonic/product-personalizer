import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss'
import PropTypes from 'prop-types';

const ProductForm = props => {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    const handleClickShoppingCart = (event) => {
        event.preventDefault();
        console.log("Summary");
        console.log("============");
        console.log("Name: ", capitalize(props.name));
        console.log("Price: ", props.price);
        console.log("Size: ", props.currentSize);
        console.log("Color: ", props.currentColor);
    }

    return (
        <form>
            <OptionSize sizes={props.sizes} setCurrentSize={props.setCurrentSize} currentSize={props.currentSize} />
            <OptionColor colors={props.colors} setCurrentColor={props.setCurrentColor} currentColor={props.currentColor} capitalize={capitalize} />
            <Button className={styles.button} onClick={handleClickShoppingCart} >
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
}

ProductForm.propTypes = {
    name: PropTypes.string.isRequired, price: PropTypes.number.isRequired, sizes: PropTypes.array.isRequired, colors: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired, currentColor: PropTypes.string.isRequired, setCurrentSize: PropTypes.func.isRequired, setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;