import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
    return (
        <Typography
            variant="body1"
            color="black"
            textAlign="left"
            sx={{ mt: 2 }}
        >
            {children}
            <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            />
        </Typography>
    );
};

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : یونس قربانی</Info>
            <Info>سن : ۳۰</Info>
            <Info>شهر : کلاله</Info>
            <Info>Younes.Gh@Chmail.ir : آدرس ایمیل</Info>
            <Info>شماره موبایل : ۰۹۳۵۰۰۰۱۱۲۲</Info>
        </>
    );
};

export default DevInfo;
