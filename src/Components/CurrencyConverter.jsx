import { useState, useEffect } from "react";
import axios from "axios";

import "./CurrencyConverter.css";

const [rates, setRates] = useState(null);
const [fromCurrency, setFromCurrency] = useState("USD");
const [toCurrency, setToCurrency] = useState("EUR");
const [amount, setAmount] = useState(1);
const [convertedAmount, setConvertedAmount] = useState(null);

const CurrencyConverter = () => {
  return (
    <div className="converter">
      <h2>Conversor de Moedas</h2>
      <input placeholder="Digite o valor..." type="number" />
      <span>Selecione as moedas</span>
      <select>
        <option value="BRL">BRL</option>
      </select>
      <span>para</span>
      <select>
        <option value="USD">USD</option>
      </select>
      <h3>BRL USD</h3>
      <p>20 BRL valem 20 USD</p>
    </div>
  );
};

export default CurrencyConverter;
