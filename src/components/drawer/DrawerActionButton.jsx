import { useContext } from "react";

import { Fab, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { red } from "@mui/material/colors";

import MainContext from "../../context";

const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext);

    return (
        <Box
            sx={{
                position: "absolute",
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                },
            }}
        >
            <Fab
                aria-label="Sidebar"
                size="small"
                onClick={() => setDrawerOpen(true)}
                sx={{ backgroundColor: red[500], m: 2 }}
            >
                <MenuRounded />
            </Fab>
        </Box>
    );
};

export default DrawerActionButton;
