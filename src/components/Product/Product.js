import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react'
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(
    props.name === 'kodilla' ? 'white' :
      props.name === 'react' ? 'blue' :
        props.color[0]
  );
  const [currentSize, setCurrentSize] = useState('S');

  const getPrice = () => {
    let additionalPrice = 0;

    for (let size of props.sizes) {
      if (size.name === currentSize) {
        additionalPrice = size.additionalPrice;
      }
    }

    return props.basePrice + additionalPrice;
  }

  //        console.log("Name: ", props.name);
  // console.log("Price: ", props.price);

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm sizes={props.sizes} colors={props.colors} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor} currentColor={currentColor} currentSize={currentSize}
          name={props.title} price={getPrice()} />
      </div>
    </article>
  )
};

Product.propTypes = { title: PropTypes.string.isRequired, basePrice: PropTypes.number.isRequired, sizes: PropTypes.array.isRequired, colors: PropTypes.array.isRequired };

export default Product;