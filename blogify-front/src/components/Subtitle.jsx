export default function Subtitle({title}){

    return (
        <div className="w-full">
            <h2 className="font-lora font-normal leading-normal capitalize text-xl mb-4">{title}</h2>
            <div className="w-[60px] h-[3px] bg-[#e85a4f] mb-5"></div>
        </div>
    );
}