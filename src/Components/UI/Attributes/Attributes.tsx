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
  const {LvlIncrimentAgility,setLvlIncrimentAgility} = useAutoIncrimentValue()

  const {coins,setCoins} = useCoins();

  const sumInLVLAgility:number = 100
  const sumInLVLStrainght:number = 125
  const sumInLVLIntilect:number = 325

  const [Selected,setSelected] = useState<number>(0)

  const selectedAttributes = (id:number)=>{ 
    setSelected(id);
  }
  const UpgradeValuIncriment = ()=>{ 
    
    const summToUpgrade = sumInLVLAgility * LvlIncrimentAgility

    if(coins >= summToUpgrade){ 
      setCoins( prev=> prev - summToUpgrade)
      setValueIncriment(prev=> prev +10);
      setLvlIncrimentAgility(prev => prev + 1);
    }

  }

  return (
    <div className={classes.AtrWrapper}>
      <div className={classes.AttributesNames}>
        {Attributes.map((item,index)=>( 
            <div onClick={()=> selectedAttributes(index)} className={`${classes.atr} ${Selected === index? classes.selected:''}`}>{item}</div>
        ))}
      </div>

        <AtrCtgr atrId={Selected}/>
        
        +1 к LvlIncrimentAgility <button onClick={UpgradeValuIncriment}>\\+\\</button>
        {coins}
        \
        {ValueIncriment}
        Для прокачки требуется{LvlIncrimentAgility*sumInLVLAgility}
    </div>
  )
}

export default Attributes

{/* <span>Ловкость {agility} <span onClick={UpgrateAgility}>+</span></span>
<span>Сила {strength} <span onClick={UpgrateStrength}>+</span></span>

<span>Интеллект {intelligence} <span onClick={UpgrateIntelligence}>+</span></span> */}