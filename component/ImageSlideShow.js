import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@mui/styles';
import { styled } from "@mui/system";

import { Grid, Card, CardMedia } from "@mui/material";

const useStyles = styled(() => ({
    card: {
        width: 300,
        marginBottom: "5%",
        // transition: "all 0.5s ease-in-out",
    },
    media: {
        height: "fit-content",
        textAlign: "center",
        position: "relative",
    },
}));

const ImageSlideshow = (props) => {
    const classes = useStyles();
    const [ currentIndex, setCurrentIndex ] = React.useState(0);
    const images = props.images;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card className={`${classes.card}`}>
                    <CardMedia
                        className={`${classes.media}`}
                        title="Image"
                    >
                        <img src={images[currentIndex]} />
                    </CardMedia>
                </Card>
            </Grid>
            <style jsx>
                {`
                    img {
                        height: "fit-content";
                        object-fit: contain,
                    }
                `}
            </style>
        </Grid>

    );
};

export default ImageSlideshow;