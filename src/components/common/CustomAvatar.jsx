import { Avatar } from "@mui/material";

const CustomAvatar = ({ avatar, size, fallback }) => {
    return (
        <>
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: size,
                    width: size,
                    margin: "0 auto",
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    },
                }}
            >
                {fallback}
            </Avatar>
        </>
    );
};

export default CustomAvatar;
