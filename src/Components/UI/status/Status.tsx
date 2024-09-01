import React,{useState} from 'react'
import classes from './style.module.css'
const Status = () => {

    const [role,setRole] = useState<number>(1)

  return (
    <div className={classes.roleStyle}>
        Ваша роль на сервере 
        {role === 1?( 
            <span className={classes.trophey}> Трофей</span>
        ): role === 2?( 
            <span className={classes.moderatorka}> Модераторка</span>
        ):<span className={classes.online}> В сети</span>}
    </div>
  )
}

export default Status