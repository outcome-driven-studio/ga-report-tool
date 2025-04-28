"use client"

import Image from "next/image";
import Footer from "@/components/Footer";
import AudienceCard from "@/components/AudienceCard";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";
import './fade.css';
import { useRouter } from 'next/navigation';
import { getAudienceData } from "@/lib/db";
import React from "react";

interface Segment {
    id: number;
    inputRecords: string;
    providerName: string;
    segmentName: string;
    segmentDescription: string;
    segmentShortName: string;
    summaryDescription: string;
    score: number;
}

interface AudienceData {
    segments: Segment[];
}

export default function Home({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const router = useRouter();
    const { slug } = React.use(params);
    const [displayedText, setDisplayedText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [audienceData, setAudienceData] = useState<AudienceData | null>(null);
    const [logo, setLogo] = useState<string | null>(null);
    const [companyName, setCompanyName] = useState<string | null>(null);
    const fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    useEffect(() => {
        const fetchData = async () => {
            if (slug) {
                const data = await getAudienceData(Array.isArray(slug) ? slug[0] : slug);
                const { logo, company_name, segments } = data;
                console.log(logo, company_name, segments);
                setAudienceData(segments);
                setLogo(logo);
                setCompanyName(company_name);
            }
        };
        fetchData();
    }, [slug]);


    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const logoUrl = logo && (logo.startsWith('http://') || logo.startsWith('https://') || logo.startsWith('/'))
        ? logo
        : "/images/sample-logo.png";

    return (
        <div className="w-full h-screen bg-white fade-in">
            <div className="flex max-w-[1720px] flex-col items-center justify-center bg-white text-black p-9 gap-12">
                <div className="w-full flex justify-between items-center">
                    <div className="inline-flex w-1/2 justify-start items-center gap-3.5 flex-grow">
                        <div className="w-16 h-16 flex justify-center items-center">
                            <Image className="w-16 h-16 rounded-lg" src={logoUrl} alt={companyName || "LilBucks"} width={70} height={70} />
                        </div>
                        <div className="w-[80%] flex flex-col justify-start items-start flex-grow">
                            <div className="w-full justify-start text-black text-5xl font-bold truncate" title={companyName || ""}>
                                {(companyName)}
                            </div>
                            <div className="justify-start text-zinc-500 text-sm font-medium truncate overflow-hidden">Audience Segments</div>
                        </div>
                    </div>
                    <div className="inline-flex justify-center items-center gap-2.5">
                        <div className="w-36 justify-start text-zinc-500 text-sm font-medium">Send these Audiences directly to</div>
                        <div className="inline-flex justify-start items-center gap-3">
                            <button
                                className="w-10 h-10 px-2 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex flex-col justify-center items-center gap-2.5 hover:bg-gray-50"
                                onClick={() => window.open('https://business.goaudience.com/login?/home=/home', '_blank')}
                            >
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.20254 7.00009C7.59944 7.00022 7.00986 7.1788 6.50804 7.51334C6.00623 7.84788 5.61462 8.32343 5.38254 8.88009C4.94954 9.92009 4.36554 12.4951 4.10154 13.7251C4.02754 14.0651 3.99754 14.3581 4.02154 14.6211C4.09954 15.5011 4.37154 15.9211 4.62754 16.1371C4.89454 16.3641 5.30054 16.5001 5.89454 16.5001C6.54754 16.5001 7.15454 16.1631 7.50154 15.6101L9.14654 12.9781L11.3335 9.33309L10.8235 8.48309C10.552 8.03077 10.168 7.65645 9.70883 7.39657C9.2497 7.13669 8.73012 7.0001 8.20254 7.00009ZM12.4995 7.39009C12.0096 6.60063 11.3117 5.96144 10.4823 5.54268C9.65293 5.12391 8.7242 4.94178 7.79809 5.01628C6.87198 5.09078 5.9843 5.41903 5.23252 5.96498C4.48075 6.51093 3.89394 7.25348 3.53654 8.11109C3.01654 9.36009 2.39354 12.1491 2.14654 13.3051C2.03219 13.7943 1.99241 14.298 2.02854 14.7991C2.13954 16.0391 2.56854 17.0131 3.33354 17.6621C4.08654 18.3011 5.02054 18.5001 5.89454 18.5001C6.5551 18.5002 7.20483 18.3322 7.78263 18.0121C8.36044 17.692 8.84733 17.2302 9.19754 16.6701L10.8475 14.0301L10.8575 14.0151L12.4995 11.2771L14.1415 14.0151L14.1515 14.0301L15.8015 16.6701C16.1517 17.23 16.6384 17.6918 17.216 18.0119C17.7936 18.332 18.4431 18.5 19.1035 18.5001C20.0865 18.5001 21.1085 18.2201 21.8755 17.4141C22.6355 16.6151 22.9995 15.4541 22.9995 14.0001C22.9995 13.0771 22.6495 11.7341 22.3245 10.6591C22.0767 9.84393 21.8049 9.03625 21.5095 8.23709C21.1707 7.36031 20.5942 6.59534 19.8447 6.02806C19.0952 5.46079 18.2025 5.11368 17.2666 5.02571C16.3308 4.93773 15.3889 5.11238 14.5469 5.53003C13.7048 5.94768 12.9958 6.59181 12.4995 7.39009ZM13.6655 9.33309L15.8515 12.9781L17.4965 15.6091C17.8425 16.1631 18.4505 16.5001 19.1035 16.5001C19.7205 16.5001 20.1465 16.3301 20.4265 16.0351C20.7145 15.7331 20.9995 15.1451 20.9995 14.0001C20.9995 13.4161 20.7445 12.3451 20.4095 11.2361C20.1742 10.461 19.916 9.69301 19.6355 8.93309C19.4257 8.40334 19.072 7.94279 18.6143 7.60345C18.1566 7.26411 17.6131 7.05948 17.0453 7.01268C16.4774 6.96588 15.9078 7.07877 15.4007 7.33859C14.8936 7.59842 14.4692 7.99484 14.1755 8.48309L13.6655 9.33309Z" fill="black" />
                                    </svg>
                                </div>
                            </button>
                            <div className="w-10 h-10 px-2 py-2 cursor-pointer rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex flex-col justify-center items-center gap-2.5" onClick={() => window.open('https://business.goaudience.com/login?/home=/home', '_blank')}>
                                <div className="w-6 h-6 relative overflow-hidden"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M11.5 1.25C11.0858 1.25 10.75 1.58579 10.75 2V16C10.75 17.2426 9.74264 18.25 8.5 18.25C7.25736 18.25 6.25 17.2426 6.25 16C6.25 14.7574 7.25736 13.75 8.5 13.75C8.91421 13.75 9.25 13.4142 9.25 13V10C9.25 9.58579 8.91421 9.25 8.5 9.25C4.77208 9.25 1.75 12.2721 1.75 16C1.75 19.7279 4.77208 22.75 8.5 22.75C12.2279 22.75 15.25 19.7279 15.25 16V10.2171C16.7655 11.1872 18.5675 11.75 20.5 11.75C20.9142 11.75 21.25 11.4142 21.25 11V8C21.25 7.58579 20.9142 7.25 20.5 7.25C17.6005 7.25 15.25 4.8995 15.25 2C15.25 1.58579 14.9142 1.25 14.5 1.25H11.5Z" fill="#2E2E2E" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 1.25V21.4377C11.3805 22.2626 9.9972 22.75 8.5 22.75C4.77208 22.75 1.75 19.7279 1.75 16C1.75 12.2721 4.77208 9.25 8.5 9.25C8.91421 9.25 9.25 9.58579 9.25 10V13C9.25 13.4142 8.91421 13.75 8.5 13.75C7.25736 13.75 6.25 14.7574 6.25 16C6.25 17.2426 7.25736 18.25 8.5 18.25C9.74264 18.25 10.75 17.2426 10.75 16V2C10.75 1.58579 11.0858 1.25 11.5 1.25H12.5Z" fill="#181818" />
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full relative bg-white rounded-xl shadow-[0px_1.357894778251648px_2.715789556503296px_0px_rgba(40,40,40,0.04)] border-[1.36px] border-neutral-200 p-8" >
                    <div className="inline-flex flex-col justify-start items-center gap-3">
                        <div className="text-center justify-start"><span className="text-black text-2xl font-bold">Reach the right audience, based on what they </span><span className="text-black text-2xl font-normal">actually buy</span></div>
                        <div className="w-3/4 text-center justify-start text-zinc-500 text-base font-normal leading-snug">Stop wasting budget on algorithm guesses. GoAudience uses Al and real purchase behavior to build custom audiences for your brand—so your ads reach people already buying products like yours, not just lookalikes.</div>
                    </div>

                    {/* {audienceData && (
                        <div className="inline-flex flex-col justify-start items-center gap-3">
                            <div className="text-center justify-start">
                                <span className="text-black text-2xl font-bold">Audience Data:</span>
                                <div className="text-black text-base font-normal">{JSON.stringify(audienceData)}</div>
                            </div>
                        </div>
                    )} */}


                    {audienceData && audienceData?.segments && <div className="w-full inline-flex grid grid-cols-3 justify-start items-start gap-2">
                        <div className="w-full">
                            {audienceData.segments.filter((_, index) => index % 3 === 0).map((item, index) => (
                                <div className="w-full" key={index}>
                                    <AudienceCard segment={item} />
                                </div>
                            ))}
                        </div>
                        <div className="w-full">
                            {audienceData.segments.filter((_, index) => index % 3 === 1).map((item, index) => (
                                <div className="w-full" key={index}>
                                    <AudienceCard segment={item} />
                                </div>
                            ))}
                        </div>
                        <div className="w-full">
                            {audienceData.segments.filter((_, index) => index % 3 === 2).map((item, index) => (
                                <div className="w-full" key={index}>
                                    <AudienceCard segment={item} />
                                </div>
                            ))}
                        </div>
                    </div>}
                    {/* <div className="w-full inline-flex grid grid-cols-3 justify-start items-start gap-2">
                        {audienceData.segments.filter((_, index) => index % 3 === 0).map((segment, index) => (
                            <div className="w-full" key={index}>
                                <AudienceCard segment={segment} />
                            </div>
                        ))}
                    </div>
                    <div className="w-full inline-flex grid grid-cols-3 justify-start items-start gap-2">
                        {audienceData.segments.filter((_, index) => index % 3 === 1).map((segment, index) => (
                            <div className="w-full" key={index}>
                                <AudienceCard segment={segment} />
                            </div>
                        ))}
                    </div>
                    <div className="w-full inline-flex grid grid-cols-3 justify-start items-start gap-2">
                        {audienceData.segments.filter((_, index) => index % 3 === 2).map((segment, index) => (
                            <div className="w-full" key={index}>
                                <AudienceCard segment={segment} />
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
            <Footer openModal={() => setIsModalOpen(true)} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
