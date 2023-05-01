import React, { useEffect, useRef, useState } from 'react'
import "./PriceTracker.css"

const PriceTracker = (props) => {

	const [state, setState] = useState({
		price: 0,
		change: false
	});

	const [coins, setCoins] = useState(0);
	
	let cryptoSymbol = props.cryptoInfo.symbol.toLowerCase();

	let socketAddress = `wss://stream.binance.com:9443/ws/${cryptoSymbol}usdt@trade`;
	let ws = new WebSocket(socketAddress);

	ws.onmessage = async (e) => {
		let stock = await JSON.parse(e.data);
		let newPrice = (Number(stock.p)*80).toFixed(2);
		console.log(e.data);
		ws.close();
		setState({
			price: newPrice,
			change: !state.change
		});
	}

	function calculate(e) {
		if(e.target.value === "") {
			setCoins(0);
		}
		const invest = Number(e.target.value);
		if(invest > 0) {
			console.log(invest);
			setCoins(invest/state.price);
		}
	}

	const preventMinus = (e) => {
		if (e.code === 'Minus') {
			e.preventDefault();
		}
	};

	const preventPasteNegative = (e) => {
		const clipboardData = e.clipboardData || window.clipboardData;
		const pastedData = parseFloat(clipboardData.getData('text'));

		if (pastedData < 0) {
			e.preventDefault();
		}
	};


	return (
		<div className='price-tracker'>
			<div className="option-set">
				<span className="option-key">
					Current Value
				</span>
				<span className="live-value">
					₹ {state.price}
				</span>
			</div>

			<div className="current-crypto value-set" onClick={props.modalEnable}>
				<div className='current-option white'><img className='current-crypto-img' src={props.cryptoInfo.logo} alt="" /> {props.cryptoInfo.name}</div> <span className='i-triangle main-color'>&#x25BE;</span>
			</div>
			<div className="option-set">
				<span className="option-key">
					Amount you want to invest
				</span>
			</div>
			
			<div className='value-set secondary-border secondary-input-color'>
				<input onChange={calculate} type="number" className="secondary-input-color secondary-text" name="" id="invest" min="0" onPaste={preventPasteNegative} onKeyDown={preventMinus}/>
				<label className='white' htmlFor="invest">INR</label>
			</div>
			<div className="option-set">
				<span className="option-key">
					Estimate Number of {props.cryptoInfo.symbol} You will Get
				</span>
			</div>
			<input value={coins} type="text" className='value-set secondary-text' disabled name="" id="" />
			<button className='buy value-set btn-theme white'>Buy</button>
		</div>
	)
}

export default PriceTracker;