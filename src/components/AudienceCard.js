import Image from "next/image";

export default function AudienceCard({ segment }) {
    if (!segment) return null;

    const tags = segment.segmentName?.split(' > ') || [];
    const inputRecords = parseInt(segment.inputRecords || '0', 10);
    const lowerBound = Math.floor(inputRecords * 0.7);
    const upperBound = inputRecords;
    const audienceSize = `${lowerBound.toLocaleString()} - ${upperBound.toLocaleString()}`;
    const summaryPoints = (segment.summaryDescription || '').split('\n').filter(point => point);

    return (
        <div className="w-full bg-white p-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col gap-5 w-full mx-auto">

                <div className="w-full flex justify-start items-center relative p-4 rounded-md shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-zinc-100">

                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                className="px-2 py-1 rounded-[5px] border border-gray-200 text-xs text-black font-medium"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div className="h-4 px-[5px] py-px left-[8px] top-[-10px] absolute bg-white inline-flex justify-center items-center gap-2.5">
                        <div className="justify-start text-neutral-500 text-sm font-normal">Segments</div>
                    </div>
                </div>
                <div className="w-full flex justify-start items-center relative p-4 rounded-md shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-zinc-100">

                    <div className="w-full justify-start text-black text-sm font-medium leading-tight">
                        {summaryPoints.map((point, index) => (
                            <div key={index} className="mb-1">• {point.substring(2)}</div>
                        ))}
                    </div>
                    <div className="h-4 px-[5px] py-px left-[8px] top-[-10px] absolute bg-white inline-flex justify-center items-center gap-2.5">
                        <div className="justify-start text-neutral-500 text-sm font-normal">What is this audience about?</div>
                    </div>
                </div>


                <div className="w-full flex justify-start items-center relative p-4">
                    <div className="w-full h-14 left-0 top-[8px] absolute rounded-md shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-zinc-100" />
                    <div className=" justify-center text-neutral-900 text-xl font-bold leading-loose">{audienceSize}</div>
                    <div className="h-4 px-[5px] py-px left-[8px] top-0 absolute bg-white inline-flex justify-center items-center gap-2.5">
                        <div className="justify-start text-neutral-500 text-sm font-normal">Audience size</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
