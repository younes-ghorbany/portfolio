import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    SchoolRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {
    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
        { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
        { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
        { label: "دوره های من", icon: <SchoolRounded />, ...tabProps(3) },
        { label: "نظرات دانشجویان", icon: <MessageRounded />, ...tabProps(4) },
        {
            label: "ارتباط با من",
            icon: <ConnectWithoutContactRounded />,
            ...tabProps(5),
        },
    ];

    return tabs;
};
