import apps from "../assets/apps.svg";
import records from "../assets/records.svg";
import screening from "../assets/screening.svg";
import user from "../assets/user.svg";

export const navlinks = [
    {
        name: "dashboard",
        imgUrl: apps,
        link: "/",
    },
    {
        name: "records",
        imgUrl: records,
        link: "/medical-records",
    },
    {
        name:"screening",   
        imgUrl: screening,
        link: "/screening-schedules",
    },
    {
        name: "profile",
        imgUrl: user,
        link: "/profile",
    },
];
