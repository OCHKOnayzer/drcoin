import React, { useState } from 'react';
import classes from './style.module.css';
import yojik from '../images/Joket.png';

type Porps = { 
  incrimentCoin: ()=>void
}

const DefaultCoin = ({ incrimentCoin }:Porps) => {
  
  const [BtnClickFlage,setBtnClickFlage] = useState<boolean>(false)

  const ShadowAnimation = ()=>{
    setBtnClickFlage(true);
    setTimeout(()=>{ 
      setBtnClickFlage(false);
    },200)
  }

  return (
    <div className={`${classes.coinWrapper} ${!BtnClickFlage?classes.Def:classes.Click}`} onClick={incrimentCoin}>

      <button className={classes.buttonAnimation} onClick={ShadowAnimation}>
       <span className={`${classes.imageWrapper }`}><img src={yojik}/></span>
      </button>

    </div>
  )
}

export default DefaultCoin