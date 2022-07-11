import React from 'react'
import "./Prize.css"

import Title from '../Typography/Title'
import Text from '../Typography/Text'
import Button from '../Button'

// Prizes
import Tshit from "../../assets/imgs/prizes/tshirt.png"
import NFT from "../../assets/imgs/prizes/nft.png"

const Prize = (props) => {
    let prize_name = "";
    let prize_img = "";

    if(props.name === "tshirt") { prize_name = "T-shirt"; prize_img = Tshit}
    if(props.name === "nft") { prize_name = "NFT"; prize_img = NFT}

    return (
        <div className="center">
            <Title content={`Congrats, you won a ${prize_name}`} />

            <div className="prize-container">
                <img className='prize-item' src={prize_img} alt={prize_name} />
            </div>

            {props.name !== "nft" ? (
                <Text content="Visit the Subvisual booth to claim your prize." />
            ) : (
                <Text content="Insert your address...." />
            )}
            
            

            <Button content="Finish"/>
        </div>
    )
}

export default Prize
