import defaultCurrencies from "../../utils";

function CurrencyBlock(value, currency, onChangeCurrency) {
    return (
        <div>
            <ul>
                {
                    defaultCurrencies.map((cur) => (
                        <li key={cur}>
                            {cur}
                        </li>
                    ))
                }
            </ul>
            <svg height="50px" viewBox="0 0 50 50" width="50px">
                <rect fill="none" height="50" width="50" />
                <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
            <input
                type="number"
                value={value}
                placeholder="0"
            />
        </div>
    );
};

export default CurrencyBlock;