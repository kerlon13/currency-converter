import styles from "./index.module.css";

function CurrencyBlock({ value, currency, onChangeCurrency, onChangeValue, defaultCurrencies, text }) {
    
    return (
        <div className={styles.block_wrapper}>
            <p className={styles.text}>{text}</p>
            <ul className={styles.currencies}>
                {
                    defaultCurrencies.map((cur) => (
                        <li 
                            key={cur} 
                            className={cur === currency ? styles.active : ""}
                            onClick={() => onChangeCurrency(cur)}
                        >
                            {cur}
                        </li>
                    ))
                }
            </ul>
            <input
                className={styles.input}
                type="number"
                value={value}
                onChange={(event) => onChangeValue(event.target.value)}
            />
        </div>
    );
};

export default CurrencyBlock;