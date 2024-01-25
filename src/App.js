import { useEffect, useState } from 'react';
import './App.css';
import CurrencyBlock from './components/CurrencyBlock';

function App() {
  const [rates, setRates] = useState([]);
  const [fromCurrency, setFromCurrency] = useState(0);
  const [toCurrency, setToCurrency] = useState(0);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

  const onChangeFromPrice = (value) => {
    setFromPrice(value);
  };

  const onChangeToPrice = (value) => {
    setToPrice(value);
  }

  useEffect (() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setRates(json);
        console.log(rates);
      })
  }, [])

  return (
    <div className='app_wrapper'>
      <h1>Currency converter</h1>
      <CurrencyBlock
        value={0}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
      />
      <CurrencyBlock 
        value={0}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
      />
    </div>
  );
}

export default App;
