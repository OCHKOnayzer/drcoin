import React,{createContext,useContext,useState,ReactNode,useMemo} from "react";

interface CoinsContextType{ 
    coins: number;
    setCoins: React.Dispatch<React.SetStateAction<number>>;
}

const CoinsContext = createContext<CoinsContextType | undefined>(undefined);

export const useCoins = () => { 
    const context = useContext(CoinsContext);
    if (!context) {
        throw new Error('useCoins должен использоваться внутри CoinsProvider');
    }
    return context;
}

export const CoinsProvider = ({children}:{children: ReactNode})=>{ 
    const [coins, setCoins] = useState<number>(100);
    const memoValue = useMemo<CoinsContextType>(()=> ({coins,setCoins}), [coins])
    return (
      <CoinsContext.Provider value={memoValue}>
        {children}
      </CoinsContext.Provider>
    );
};