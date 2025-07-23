import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react'
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(
    props.name === 'kodilla' ? 'white' :
      props.name === 'react' ? 'blue' :
        props.color[0]
  );
  const [currentSize, setCurrentSize] = useState('S');

  const price = useMemo(() => {
    let additionalPrice = 0;
    for (let size of props.sizes) {
      if (size.name === currentSize) {
        additionalPrice = size.additionalPrice;
      }
    }

    return props.basePrice + additionalPrice;
  }, [props.basePrice, props.sizes, currentSize]);

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm sizes={props.sizes} colors={props.colors} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor} currentColor={currentColor} currentSize={currentSize}
          name={props.title} price={price} />
      </div>
    </article>
  )
};

Product.propTypes = { title: PropTypes.string.isRequired, basePrice: PropTypes.number.isRequired, sizes: PropTypes.array.isRequired, colors: PropTypes.array.isRequired };

export default Product;