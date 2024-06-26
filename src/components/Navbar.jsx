import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { Searchbox } from "./Searchbox";
import { SidebarSS } from "./SidebarSS";
import { showAtom } from "../Store/Atoms/show";

export function Navbar() {

    const setShow = useSetRecoilState(showAtom);
    const elementRef = useRef(null);
    const iconRef = useRef(null);


    // Function to handle click outside
    const handleClickOutside = (event) => {
        if (
            elementRef.current && !elementRef.current.contains(event.target) &&
            iconRef.current && !iconRef.current.contains(event.target)
        ) {
            setShow(0);
        }
    };

    document.addEventListener('click', handleClickOutside);

    return (
        <>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 z-10" ref={elementRef}>
                <SidebarSS/>
            </div>
            <div className="flex justify-between items-center mb-5 shadow-md py-3 px-5">
                <div className="flex items-center ">
                    <svg className="md:hidden cursor-pointer" ref={iconRef} onClick={()=>{setShow(1)}} xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                    <div className="xs:flex items-center">
                        <div className="font-medium text-2xl ml-4">Payouts</div>
                        <div className="flex items-center ml-4 text-slate-800">
                            <div className="cursor-pointer border border-slate-400 rounded-full px-2  text-sm ">?</div>
                            <div className="text-sm ml-1">How it works</div>
                        </div>
                    </div>
                </div>
                <Searchbox/>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center justify-center h-10 w-10 bg-slate-150 rounded-full cursor-pointer">

                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path fill="#4e4d4e" d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </div>

                    <div className="flex items-center justify-center h-10 w-10 bg-slate-150 rounded-full cursor-pointer">

                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 320 512"><path fill="#4e4d4e" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}