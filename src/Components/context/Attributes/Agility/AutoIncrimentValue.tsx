import React,{createContext,useContext,useState,ReactNode,useMemo} from "react";

interface AutoIncrimentValueType{ 
    ValueIncriment: number;
    setValueIncriment: React.Dispatch<React.SetStateAction<number>>;
    LvlIncrimentAgility: number;
    setLvlIncrimentAgility: React.Dispatch<React.SetStateAction<number>>;
};

const AutoIncrimentValueContext = createContext<AutoIncrimentValueType | undefined>(undefined);

export const useAutoIncrimentValue = () =>{ 
    const context = useContext(AutoIncrimentValueContext);

    if(!context){ 
        throw new Error('useAutoIncrimentValue должен использоваться внутри ');
    }
    return context   
}

export const AutoIncrimentValueProvider = ({children}: {children: ReactNode})=>{ 
    const [ValueIncriment,setValueIncriment] = useState<number>(0);
    const [LvlIncrimentAgility,setLvlIncrimentAgility] = useState<number>(0)
    const memoValue = useMemo<AutoIncrimentValueType>(()=> (
        {
            ValueIncriment,
            setValueIncriment,
            LvlIncrimentAgility,
            setLvlIncrimentAgility
        }
    ),[ValueIncriment,LvlIncrimentAgility])
    return( 
        <AutoIncrimentValueContext.Provider value={memoValue}>
            {children}
        </AutoIncrimentValueContext.Provider>
    )
}