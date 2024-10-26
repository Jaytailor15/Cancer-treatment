import { IconChevronRight } from "@tabler/icons-react";
import React from "react";

const MetricsCard = ({
    title,
    subtitle,
    value,
    icon: Icon,
    onClick
}) => (
    <div className="bg-[#1c1c24] rounded-[10px] p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
            <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-white mb-[10px]">{title}</h4>
                <p className="font-epilogue font-normal text-[#808191] text-[12px]">
                    {subtitle}
                </p>
            </div>
            <Icon className="w-[40px] h-[40px] text-[#4acd8d]" />
        </div>
        <div className="flex justify-between items-center mt-[20px]">
            <h4 className="font-epilogue font-semibold text-[24px] text-white">{value}</h4>
            <div className="flex items-center gap-[12px]" onClick={onClick}>
                <p className="font-epilogue font-normal text-[12px] text-[#4acd8d] cursor-pointer">
                    View
                </p>
                <IconChevronRight className="w-[20px] h-[20px] text-[#4acd8d] cursor-pointer" />
            </div>
        </div>
    </div>
)

export default MetricsCard;
