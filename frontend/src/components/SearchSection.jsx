import react, { useEffect, useState } from 'react';

export default function SearchSection () {
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
                <input 
                    type="date" 
                    placeholder="Check in" 
                    className="bg-transparent h-full w-full p-4 outline-none border-none" 
                />
                </div>
                {/* Check-out */}
                <div className="p-4 flex items-center h-full w-1/4 bg-white rounded-full transition-all delay-5 hover:bg-slate-100 cursor-pointer">
                <input 
                    type="text" 
                    placeholder="Check out" 
                    className="bg-transparent h-full w-full p-4 outline-none border-none" 
                />
                </div>
                {/* Travelers */}
                <div className="p-4 flex items-center h-full w-1/4 bg-white rounded-full transition-all delay-5 hover:bg-slate-100 cursor-pointer">
                <input 
                    type="text" 
                    placeholder="Who" 
                    className="bg-transparent h-full w-full p-4 outline-none border-none" 
                />
                </div>
                {/* Search button */}
                <div className="p-4 flex items-center h-full bg-red-500 text-white rounded-full cursor-pointer">
                
                </div>
            </div>
    </div>
    )
}