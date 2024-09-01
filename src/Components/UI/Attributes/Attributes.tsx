import React,{useState} from 'react';
import classes from './style.module.css';
import AtrCtgr from './AtrCtgr';
import { useAutoIncrimentValue } from '../../context/Attributes/Agility/AutoIncrimentValue';
import { useCoins } from '../../context/CoinsContext';

type ValueToUpgrate = { 

  coinsToupgrade: number

}

const Attributes = ()=> {
  const Attributes = ["Сила","Ловкость","Интеллект"];

  const {ValueIncriment,setValueIncriment} = useAutoIncrimentValue();
  const {coins,setCoins} = useCoins();
  const [sumToupgrade ,setSumToUpgrade] = useState<number>()

  const sumInLVLAgility = 100
  const sumInLVLStrainght = 125
  const sumInLVLIntilect = 325

  const [Selected,setSelected] = useState<number>(0)

  const selectedAttributes = (id:number)=>{ 
    setSelected(id);
  }
  const UpgradeValuIncriment = ()=>{ 
    
    

  }

  return (
    <div className={classes.AtrWrapper}>
      <div className={classes.AttributesNames}>
        {Attributes.map((item,index)=>( 
            <div onClick={()=> selectedAttributes(index)} className={`${classes.atr} ${Selected === index? classes.selected:''}`}>{item}</div>
        ))}
      </div>

        <AtrCtgr atrId={Selected}/>
        
        

    </div>
  )
}

export default Attributes

{/* <span>Ловкость {agility} <span onClick={UpgrateAgility}>+</span></span>
<span>Сила {strength} <span onClick={UpgrateStrength}>+</span></span>

<span>Интеллект {intelligence} <span onClick={UpgrateIntelligence}>+</span></span> */}