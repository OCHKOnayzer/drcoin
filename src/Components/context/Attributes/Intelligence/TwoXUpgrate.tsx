import React,{createContext,useContext,useState,ReactDOM} from 'react';

interface XUpgradeType{ 
    Intilect: number;
    setIntilect: React.Dispatch<React.SetStateAction<number>>
}

const XUpgradeContext = createContext<XUpgradeType | undefined>(undefined);

export const useIntilect = ()=>{ 
    const context = useContext(XUpgradeContext);
}