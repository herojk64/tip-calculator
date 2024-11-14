import { createContext, ReactNode, useState } from "react";

interface TipInterface {
    bill:number,
    tip:number,
    number:number,
}

interface TipProviderProps {
    children: ReactNode;
}

const TipContext = createContext<
{
    tipData: TipInterface;
    setTipData: React.Dispatch<React.SetStateAction<TipInterface>>;
    reset:()=>void;
}
>({
    tipData: { bill: 0, tip: 0, number: 0 },
    setTipData: () => {},
    reset:()=>{}
});

const TipProvider = ({children}:TipProviderProps) =>{
    const [tipData,setTipData] = useState<TipInterface>({
            bill:0,
            tip:0,
            number:0
        });

    const reset = ()=>{
        setTipData({
            bill:0,
            tip:0,
            number:0 
        })
    }

    return (
        <TipContext.Provider value={{ tipData,setTipData,reset }}>
            {children}
        </TipContext.Provider>
    )
}

export {TipContext,TipProvider}