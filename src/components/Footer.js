import Image from "next/image";
import React from "react";

export default function Footer({ openModal }) {
    return (
        <div className="w-full h-20 fixed bottom-0 bg-stone-50 shadow-[0px_-3px_8px_0px_rgba(16,24,40,0.09)] border-t border-gray-200 flex justify-center items-center">
            <div className="w-full max-w-[1184px] inline-flex justify-between items-center">
                <div className="px-2 py-[3px] bg-stone-50 rounded-[76px] outline outline-1 outline-gray-200 inline-flex justify-start items-center gap-1 overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path d="M2.88068 1.59865C2.88068 1.2451 2.59408 0.958496 2.24053 0.958496C1.88698 0.958496 1.60038 1.2451 1.60038 1.59865V2.55887H0.640152C0.286606 2.55887 0 2.84548 0 3.19903C0 3.55257 0.286606 3.83918 0.640152 3.83918H1.60038V4.79941C1.60038 5.15295 1.88698 5.43956 2.24053 5.43956C2.59408 5.43956 2.88068 5.15295 2.88068 4.79941V3.83918H3.84091C4.19446 3.83918 4.48106 3.55257 4.48106 3.19903C4.48106 2.84548 4.19446 2.55887 3.84091 2.55887H2.88068V1.59865Z" fill="#101010" />
                        <path d="M2.88068 11.2009C2.88068 10.8474 2.59408 10.5608 2.24053 10.5608C1.88698 10.5608 1.60038 10.8474 1.60038 11.2009V12.1611H0.640152C0.286606 12.1611 0 12.4478 0 12.8013C0 13.1548 0.286606 13.4415 0.640152 13.4415H1.60038V14.4017C1.60038 14.7552 1.88698 15.0418 2.24053 15.0418C2.59408 15.0418 2.88068 14.7552 2.88068 14.4017V13.4415H3.84091C4.19446 13.4415 4.48106 13.1548 4.48106 12.8013C4.48106 12.4478 4.19446 12.1611 3.84091 12.1611H2.88068V11.2009Z" fill="#101010" />
                        <path d="M8.2793 2.009C8.18422 1.76178 7.94669 1.59865 7.68182 1.59865C7.41694 1.59865 7.17942 1.76178 7.08434 2.009L5.9742 4.89535C5.7819 5.39534 5.72147 5.53942 5.63881 5.65567C5.55587 5.77231 5.45396 5.87422 5.33732 5.95715C5.22108 6.03981 5.077 6.10024 4.57701 6.29254L1.69065 7.40268C1.44343 7.49777 1.2803 7.73529 1.2803 8.00016C1.2803 8.26504 1.44343 8.50256 1.69065 8.59765L4.57701 9.70778C5.077 9.90009 5.22108 9.96051 5.33732 10.0432C5.45396 10.1261 5.55587 10.228 5.63881 10.3447C5.72147 10.4609 5.7819 10.605 5.9742 11.105L7.08434 13.9913C7.17942 14.2385 7.41694 14.4017 7.68182 14.4017C7.9467 14.4017 8.18422 14.2385 8.2793 13.9913L9.38944 11.105C9.58174 10.605 9.64217 10.4609 9.72483 10.3447C9.80777 10.228 9.90968 10.1261 10.0263 10.0432C10.1426 9.96051 10.2866 9.90009 10.7866 9.70778L13.673 8.59765C13.9202 8.50256 14.0833 8.26504 14.0833 8.00016C14.0833 7.73529 13.9202 7.49777 13.673 7.40268L10.7866 6.29254C10.2866 6.10024 10.1426 6.03981 10.0263 5.95715C9.90967 5.87422 9.80777 5.77231 9.72483 5.65567C9.64217 5.53942 9.58174 5.39534 9.38944 4.89535L8.2793 2.009Z" fill="#101010" />
                    </svg>
                    <div className="justify-start text-black text-sm font-semibold leading-tight">Use these audiences in your next campaign</div>
                </div>
                <div className="flex justify-start items-center gap-3">

                    <div className="h-11 px-6 py-3.5 cursor-pointer bg-[#55B271] rounded-lg flex justify-center items-center gap-3.5" onClick={() => window.open('https://meetings.hubspot.com/mai-el-naggar/book-a-demo', '_blank')}>
                        <div className="justify-start text-white text-base font-bold leading-normal">Get a live demo</div>
                    </div>

                    <div className="h-11 px-4 py-2.5 cursor-pointer rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-[#55B271] flex justify-center items-center gap-2 overflow-hidden" onClick={() => window.open('https://goaudience.com', '_blank')}>
                        <div className="px-0.5 inline-flex flex-col justify-start items-start">
                            <div className="justify-start text-[#55B271] text-base font-bold leading-normal">Activate in GoAudience</div>
                        </div>
                        <div className="w-6 h-6 relative overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#55B271" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}