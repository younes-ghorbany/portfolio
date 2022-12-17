import { createContext } from "react";

export default createContext({
    pageNumber: 0,
    handlePageNumber: () => {},
    handleThemeChange: () => {},
    drawerOpen: false,
    setDrawerOpen: () => {},
});
