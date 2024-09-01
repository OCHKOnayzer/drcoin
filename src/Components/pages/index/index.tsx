import React,{useEffect, useState} from 'react'
import DefaultCoin from '../../UI/COINS/DefualtCoin/DefaultCoin';
import classes from './style.module.css';
import Attributes from '../../UI/Attributes/Attributes';
import coinimage from '../image/coin.png'
import Status from '../../UI/status/Status';
import Rooms from '../../UI/rooms/rooms';
import ShopIndex from '../../UI/shop/ShopIndex';
import { useCoins } from '../../context/CoinsContext';
import { useAutoIncrimentValue } from '../../context/Attributes/Agility/AutoIncrimentValue';


const Index = () => {

    const {coins,setCoins} = useCoins();
    const [flag,setFlag] = useState<boolean>(false);
    const [strength,setStrength] = useState<number>(1);
    const [GigiClick,setGigiClick] = useState<number>(0);
    const {ValueIncriment,setValueIncriment} = useAutoIncrimentValue();
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCoins((prev) => prev + 10+ValueIncriment);
        }, 1000); 

        return () => clearInterval(interval);
    }, [setCoins,ValueIncriment]);


    const IncrimentCoin = ()=>{ 
      setCoins(prev=> prev+strength)
    }

    const zeroClean = ()=>{ 
        
    }

    const SecretShop = ()=>{ 

        if(GigiClick < 3){ 
            setGigiClick(prev=> prev+1)
        }
       
    }

  return (
    <div className={classes.IndexPageWrapper}>
        <div className={classes.Wrapper}>
            <ShopIndex/>
            <div className={classes.wrapperCoins}>
                
                <div className={classes.coinsConteiner}>
                    <div className={classes.coinsWrapper} onClick={SecretShop}>
                        <div className={classes.gigiClick}>{GigiClick}</div>
                        <img src={coinimage} alt="" />
                    </div>
                    {coins}
                </div>
                


                <DefaultCoin incrimentCoin={IncrimentCoin}/>
                <Status/>
                
            </div>
            <Attributes/>
        </div>
    </div>
  )
}

export default Index