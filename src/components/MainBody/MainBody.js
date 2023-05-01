import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import NotchHead from '../NotchHead/NotchHead';
import PriceTracker from '../PriceTracker/PriceTracker';
import "./MainBody.css"

const MainBody = () => {

	const [modalOn, setModalOn] = useState(false);
	const [cryptoInfo, setCryptoInfo] = useState({
        name: "Bitcoin",
        logo: "assets/logos/BTC.png",
        symbol: "BTC"
    });

	function modalEnable() {
		setModalOn(!modalOn);
	}

	function changeCrypto(data) {
		console.log(data);
		setCryptoInfo(data);
	}

    return (
        <div className="mb-container">
			<div className='mb-wrapper'>
				<NotchHead logo={cryptoInfo.logo}/>
				<PriceTracker modalEnable={modalEnable} cryptoInfo={cryptoInfo} />
				<Modal modalEnable={modalEnable} modalOn={modalOn} changeCrypto={changeCrypto} cryptoName={cryptoInfo.name}/>
			</div>
		</div>
    )
}

export default MainBody;