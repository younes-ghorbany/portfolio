import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import { ShowCourses } from "../components/pages";

const Courses = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="primary.main"
                    cColor="primary"
                    icon={<SchoolRounded />}
                    align="center"
                    text="دوره های من"
                />

                <Grid container sx={{ mx: 3, mt: 3 }}>
                    <ShowCourses loading={loading} />
                </Grid>
            </CardContent>
        </Card>
    );
};
export default Courses;
