import { useEffect, useRef, useState } from 'react';
import './App.css';
import CurrencyBlock from './components/CurrencyBlock';
import defaultCurrencies from './utils';

function App() {
  const ratesRef = useRef([]);
  const [fromCurrency, setFromCurrency] = useState(defaultCurrencies[0]);
  const [toCurrency, setToCurrency] = useState(defaultCurrencies[1]);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

  const onChangeFromPrice = (value) => {
    const selectedRateFrom = ratesRef.current.find((rate) => rate.cc === fromCurrency);
    const selectedRateTo = ratesRef.current.find((rate) => rate.cc === toCurrency);
  
    if (selectedRateFrom && selectedRateTo) {
      const price = value / selectedRateTo.rate;
      const result = price * selectedRateFrom.rate;
      setFromPrice(value);
      setToPrice(result.toFixed(3));
    }
  };
  
  const onChangeToPrice = (value) => {
    const selectedRateFrom = ratesRef.current.find((rate) => rate.cc === fromCurrency);
    const selectedRateTo = ratesRef.current.find((rate) => rate.cc === toCurrency);
  
    if (selectedRateFrom && selectedRateTo) {
      const result = (selectedRateTo.rate / selectedRateFrom.rate) * value;
      setToPrice(value);
      setFromPrice(result.toFixed(3));
    }
  };

  useEffect (() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        ratesRef.current = json;
        onChangeFromPrice(1);
      })
  }, [])

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [toCurrency])

  return (
    <div className='app_wrapper'>
      <h1>Currency converter</h1>
      <div className='converter_wrapper'>
        <CurrencyBlock
          value={fromPrice}
          currency={fromCurrency}
          onChangeCurrency={setFromCurrency}
          onChangeValue={onChangeFromPrice}
          defaultCurrencies={defaultCurrencies}
          text="I have"
        />
        <CurrencyBlock 
          value={toPrice}
          currency={toCurrency}
          onChangeCurrency={setToCurrency}
          onChangeValue={onChangeToPrice}
          defaultCurrencies={defaultCurrencies}
          text="I want to buy"
        />
      </div>
    </div>
  );
}

export default App;
