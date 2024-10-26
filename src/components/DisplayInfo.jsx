import { IconCircleCheck, IconHourglassHigh, IconUserScan } from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetricsCard from "./MetricsCard";

const DisplayInfo = () => {
    const navigate = useNavigate();
    const [metrics, setMetrics] = useState({
        totalFolders: 0,
        aiPersonalizedTreatment: 0,
        totalScreenings: 0,
        completedScreenings: 0,
        pendingScreenings: 0,
        overdueScreenings: 0,
    });

    const metricsData = [
        {
            title: "Specialist Appointments Pending",
            subtitle: "View appointments",
            value: metrics.pendingScreenings,
            icon: IconHourglassHigh,
            onClick: () => navigate('/appoinments/pending'),
        },
        {
            title: "Treatment Progress Update",
            subtitle: "View progress",
            value: `${metrics.completedScreenings} of ${metrics.totalScreenings}`,
            icon: IconCircleCheck,
            onClick: () => navigate('/appoinments/progress'),
        },
        {
            title: "Total Folders",
            subtitle: "View folders",
            value: metrics.totalFolders,
            icon: IconHourglassHigh,
            onClick: () => navigate('/folders'),
        },
        {
            title: "Total Screenings",
            subtitle: "View all screenings",
            value: metrics.totalScreenings,
            icon: IconUserScan,
            onClick: () => navigate('/screenings'),
        },
        {
            title: "Completed Screenings",
            subtitle: "View completed",
            value: metrics.completedScreenings,
            icon: IconUserScan,
            onClick: () => navigate('/screenings/completed'),
        },
        {
            title: "Pending Screenings",
            subtitle: "View pending",
            value: metrics.pendingScreenings,
            icon: IconUserScan,
            onClick: () => navigate('/screenings/pending'),
        },
        {
            title: "Overdue Screenings",
            subtitle: "View overdue",
            value: metrics.overdueScreenings,
            icon: IconUserScan,
            onClick: () => navigate('/screenings/overdue'),
        },
    ];

    return (
        <div className="p-6 bg-[#13131a] rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metricsData.map((metric) => (
                    <MetricsCard key={metric.title} {...metric} />
                ))}
            </div>
        </div>
    );
};

export default DisplayInfo;
