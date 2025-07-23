import styles from "./OptionSize.module.scss"
import PropTypes from 'prop-types';

const OptionSize = props => {

    const handleButtonSizeClick = size => {
        props.setCurrentSize(size);
    }

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(size => {
                    return (<li key={size.name}><button onClick={() => handleButtonSizeClick(size.name)} type="button" className={size.name === props.currentSize && styles.active}>{size.name}</button></li>)
                })}
            </ul>
        </div>
    )
}

OptionSize.propTypes = { sizes: PropTypes.array.isRequired, currentSize: PropTypes.string.isRequired, setCurrentSize: PropTypes.func.isRequired };

export default OptionSize;