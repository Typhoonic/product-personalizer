import styles from './OptionColor.module.scss'
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionColor = props => {
    const handleButtonColorClick = color => {
        props.setCurrentColor(color);
    };

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map(color => {
                    const colorClass = styles[`color${props.capitalize(color)}`];
                    return (
                        <li key={color}>
                            <button onClick={() => handleButtonColorClick(color)} type="button" className={clsx(colorClass, props.currentColor === color && styles.active)} />
                        </li>)
                })}
            </ul>
        </div>
    );
}

OptionColor.propTypes = { colors: PropTypes.array.isRequired, currentColor: PropTypes.string.isRequired, setCurrentColor: PropTypes.func.isRequired, capitalize: PropTypes.func.isRequired };

export default OptionColor;