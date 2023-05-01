import { useState } from "react";
import symbols from "../../data/symbols";
import "./Modal.css"

const Modal = (props) => {

	const [data, setData] = useState({
		text: props.cryptoName,
		options: symbols
	});

	console.log(data.text);

	function handleInput(e) {
		let array = [];
		let inputData = e.target.value;
		console.log(inputData);
		if(inputData) {
			array = symbols.filter((data) => {
				return data.name.toLowerCase().startsWith(inputData.toLowerCase());
			})

			setData({
				text: inputData,
				options: array
			});
		} else if(inputData === "") {
			setData({
				text: inputData,
				options: symbols
			});
		}
		
	}

	function sendCryptoName(d) {
		props.changeCrypto(d);
		setData({
			...data,
			text: d.name
		})
	}

	return (
		<div className='modal' style={{display: props.modalOn?"block":"none"}}>
			<div class="modal-content d-flex">
				{/* <p>Some text in the Modal..</p> */}
				<div className="cross"><span onClick={props.modalEnable} class="close">&times;</span></div>
				<input value={data.text} type="text" className='search-text' name="" id="" placeholder='Search Chains' onChange={handleInput} />
				<div className="search-options">
					{data.options.map(data => <li onClick={() => {sendCryptoName(data)}} className={`search-option white ${props.cryptoName===data.name?"current-selected":""}`}><img className="current-crypto-img" src={`assets/logos/${data.symbol}.png`} alt="" />{data.name}</li>)}
				</div>
			</div>
		</div>
	)
}

export default Modal;