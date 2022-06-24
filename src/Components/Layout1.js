import React from 'react';
import { Card,Box,Grid} from '@mui/material';
import Header from './Header/Header';
import { makeStyles } from '@mui/styles';


const useStyles=makeStyles((theme) => ({
    card: {
        maxWidth: 1600,
        margin: "auto",
        height:'150px',
        textAlign: "center",
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        boxShadow: "1px 1px 5px #ccc",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'14px',
        fontWeight: "bold",
        
    },

}));
function Layout1(props) {
    const classes=useStyles();
    const { page } = props;

    return (
    <div>
        <Header  page={1} />
        <Box sx={{ flexGrow: 1 }} style={{margin: "0 10px",}}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                <Card style={{background:'#DA1E5D',color:'#fff',}} className={classes.card}>Card 1</Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                <Card style={{background:'#DA1E5D',color:'#fff',}} className={classes.card}>Card 1</Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Card style={{background:'#DA1E5D',color:'#fff',}} className={classes.card}>Card 1</Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Card style={{background:'#DA1E5D',color:'#fff',}} className={classes.card}>Card 1</Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Card style={{background:'#DA1E5D',color:'#fff',}} className={classes.card}>Card 1</Card>
                </Grid>
            </Grid>
        </Box>
    </div>
    );
}

export default Layout1;