import react, { useEffect, useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import { HiMinus } from "react-icons/hi2";
import { HiMiniPlus } from "react-icons/hi2";



export default function SearchSection () {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    // for adult
    const [ totalAmount, setTotalAmount ] = useState(0);
    const [ animals, setAnimals ] = useState(0);
    const [ amount, setAmount ] = useState(0);

    const handleAmount = () => {
        if ( amount < 10 ) {
            setAmount(amount + 1);
            setTotalAmount(totalAmount + 1)
        }
        
    }

    const handleAmountMinus = () => {
        if ( amount > 0 ) {
            setAmount(amount - 1);
            setTotalAmount(totalAmount - 1)
        }
        
    }

    // for children
    const [ totalChildren, setTotalChildren ] = useState(0);
    const [ childrenAmount, setChildrenAmount ] = useState(0);

    const handleChildrenAmount = ()=> {
        if ( childrenAmount < 10 ) {
            setChildrenAmount(childrenAmount + 1)
            setTotalAmount(totalAmount + 1)
        }
    }

    const handleMinusChildrenAmount = ()=> {
        if ( childrenAmount > 0 ) {
            setChildrenAmount( childrenAmount - 1 )
            setTotalAmount(totalAmount - 1)
        }
    }

    // for infants
    const [ totalInfant, setTotalInfant ] = useState(0);
    const [ infantAmount, setInfantAmount ] = useState(0);

    const handleInfantPlus = () => {
        if ( infantAmount < 10 ) {
            setInfantAmount(infantAmount + 1)
            setTotalAmount(totalAmount + 1)
        }
    }

    const handleInfantMinus = ()=> {
        if ( infantAmount > 0 ) {
            setInfantAmount(infantAmount - 1)
            setTotalAmount(totalAmount - 1)
        }
    }

    // for animales
    const [ totalAnimal, setTotalAnimal ] = useState(0);
    const [ animalAmount, setAnimalAmount ] = useState(0);

    const handleAnimalPlus = () => {
        if ( animalAmount < 10 ) {
            setAnimalAmount(animalAmount + 1)
            setTotalAnimal( totalAnimal + 1 )
        }
    }

    const handleAnimalMinus = ()=> {
        if ( animalAmount > 0 ) {
            setAnimalAmount(animalAmount - 1)
            setTotalAnimal( totalAnimal - 1 )
        }
    }

    const [ showPlusMinus, setPlusMinus ] = useState(false);

    const handleShowPlusMinus = ()=> {

        if( showPlusMinus == false ) {
            setPlusMinus(true);
        }
        setPlusMinus(false);
            
    }

    return (
        <div className="w-full container mx-auto my-24 flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-full w-4/5 flex items-center justify-between h-16">
                {/* destination search */}
                <div className="p-4 flex items-center h-full w-1/4 bg-white rounded-full transition-all delay-5 hover:bg-slate-100 cursor-pointer">
                <input 
                    type="text" 
                    placeholder="Search destination" 
                    className="bg-transparent h-full w-full p-4 outline-none border-none" 
                    
                />
                </div>
                {/* Check-in */}
                <div className="p-4 flex items-center h-full w-1/4 bg-white rounded-full transition-all delay-5 hover:bg-slate-100 cursor-pointer">
                    <Datepicker
                    classNames={"rounded-full"}
                        primaryColor={"blue"} 
                        value={value} 
                        onChange={handleValueChange} 
                        showShortcuts={true}   
                    />
                </div>
                {/* Check-out */}
                <div className="p-4 flex items-center h-full w-1/4 bg-white rounded-full transition-all delay-5 hover:bg-slate-100 cursor-pointer">
                <Datepicker
                    classNames={"rounded-full"}
                        primaryColor={"blue"} 
                        value={value} 
                        onChange={handleValueChange} 
                        showShortcuts={true}   
                    />
                </div>
                {/* Travelers */}
                <div onClick={()=>setPlusMinus(true)} className="p-4 flex items-center h-full w-1/4 bg-white rounded-full transition-all delay-5 hover:bg-slate-100 cursor-pointer">
                <input 
                    type="text" 
                    placeholder="Who" 
                    className="bg-transparent h-full w-full p-4 outline-none border-none font-semibold text-sm"
                    value={`Total: ${totalAmount} ${totalAnimal > 0 ? `,Total Animal: ${totalAnimal}` : ''}`}
                />
                    {/* travelers amount section */}
                    <div className={`${showPlusMinus == false ? 'hidden' : 'block'} flex flex-col top-[250px] fixed w-[24%] left-[75rem] bg-white rounded-2xl shadow-lg p-2 gap-5`}>
                        <div className="flex items-center justify-between bg-white border-b-2 p-3 w-full">
                            <div className="flex flex-col items-start w-full">
                                <p className="">Adults</p>
                                <p className="text-slate-400 text-md">Age 13 or above</p>
                            </div>
                            <div className="flex items-center justify-between w-[40%]">
                                <HiMinus onClick={handleAmountMinus}
                                    className="p-1 text-slate-400 text-3xl border rounded-full transition-all hover:bg-slate-200 delay-5" />
                                <input value={amount} readOnly type="text" defaultValue="0" className="w-[50%] border-none text-center outline-none" />
                                <HiMiniPlus onClick={handleAmount}
                                     className="p-1 text-slate-400 text-3xl border rounded-full transition-all hover:bg-slate-200 delay-5" />
                            </div>
                            {/* <input type="text" /> */}
                        </div>
                        <div className="flex items-center justify-between bg-white border-b-2 p-3 w-full">
                            <div className="flex flex-col items-start w-full">
                                <p className="">Childrens</p>
                                <p className="text-slate-400 text-md">Age 13 or above</p>
                            </div>
                            <div className="flex items-center justify-between w-[40%]">
                                <HiMinus onClick={handleMinusChildrenAmount}
                                    className="p-1 text-slate-400 text-3xl border rounded-full transition-all hover:bg-slate-200 delay-5" />
                                <input readOnly value={childrenAmount} type="text" defaultValue="0" className="w-[50%] border-none text-center outline-none" />
                                <HiMiniPlus onClick={handleChildrenAmount} className="p-1 text-slate-400 text-3xl border rounded-full transition-all hover:bg-slate-200 delay-5" />
                            </div>
                            {/* <input type="text" /> */}
                        </div>
                        <div className="flex items-center justify-between bg-white border-b-2 p-3 w-full">
                            <div className="flex flex-col items-start w-full">
                                <p className="">Infants</p>
                                <p className="text-slate-400 text-md">Age 13 or above</p>
                            </div>
                            <div className="flex items-center justify-between w-[40%]">
                                <HiMinus onClick={handleInfantMinus}
                                     className="p-1 text-slate-400 text-3xl border rounded-full transition-all hover:bg-slate-200 delay-5" />
                                <input readOnly value={infantAmount} type="text" defaultValue="0" className="w-[50%] border-none text-center outline-none" />
                                <HiMiniPlus onClick={handleInfantPlus} className="p-1 text-slate-400 text-3xl border rounded-full transition-all hover:bg-slate-200 delay-5" />
                            </div>
                            {/* <input type="text" /> */}
                        </div>    
                        <div className="flex items-center justify-between bg-white p-3 w-full">
                            <div className="flex flex-col items-start w-full">
                                <p className="">Pets</p>
                                <p className="text-slate-400 text-md">Are you coming with pets?</p>
                            </div>
                            <div className="flex items-center justify-between w-[40%]">
                                <HiMinus onClick={handleAnimalMinus} className="p-1 text-slate-400 text-3xl border rounded-full transition-all hover:bg-slate-200 delay-5" />
                                <input readOnly value={animalAmount} type="text" defaultValue="0" className="w-[50%] border-none text-center outline-none" />
                                <HiMiniPlus onClick={handleAnimalPlus} className="p-1 text-slate-400 text-3xl border rounded-full transition-all hover:bg-slate-200 delay-5" />
                            </div>
                            {/* <input type="text" /> */}
                        </div>    
                    </div>
                </div>
                {/* Search button */}
                <div className="p-4 flex items-center h-full bg-red-500 text-white rounded-full cursor-pointer">
                
                </div>
            </div>
    </div>
    )
}