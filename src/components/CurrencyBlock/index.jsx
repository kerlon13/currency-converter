import defaultCurrencies from "../../utils";
import styles from "./index.module.css";

function CurrencyBlock(value, currency, onChangeCurrency, onChangeValue) {
    return (
        <div className={styles.block_wrapper}>
            <ul className={styles.currencies}>
                {
                    defaultCurrencies.map((cur) => (
                        <li key={cur}>
                            {cur}
                        </li>
                    ))
                }
            </ul>
            <input
                className={styles.input}
                type="number"
                value={value}
                placeholder="0"
            />
        </div>
    );
};

export default CurrencyBlock;