import React from 'react';
import { useState } from 'react';
import { Button, Grid, Typography, Box, TextField,AppBar, Toolbar } from '@mui/material';
import { dtr, Feeder, Section, SubStation } from './Dropdown';
import Home from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function EventSummeryReport() {
    const initialValues = {
        sections: "",
        substation: "",
        feeder: "",
        dtr: "",
        meter: "",
        fromdate: "",
        todate: ""
    };

    const [values, setValues] = useState(initialValues);
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", values);
        setValues({
            sections: "",
            substation: "",
            feeder: "",
            dtr: "",
            meter: "",
            fromdate: "",
            todate: ""
        })

    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <AppBar position="relative">
                    <Toolbar>
                        <Box sx={{ width: '100%', maxWidth: 500 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                <Home color="black" />
                                <KeyboardArrowRightIcon />Reports
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                Event Summery Report
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
                <form action="" onSubmit={handleSubmit}>

                    <Grid container direction="row" justifyContent="center" alignContent="center" paddingTop={5}>
                        <TextField
                            name='sections'
                            select
                            required label="Sections:"
                            value={values.sections}
                            onChange={handleInputChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {Section.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            name='substation'
                            id="outlined-select-currency-native"
                            select
                            required label="Sub Station:"
                            value={values.substation}
                            onChange={handleInputChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {SubStation.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            name='feeder'
                            id="outlined-select-currency-native"
                            select
                            required label="Feeder:"
                            value={values.feeder}
                            onChange={handleInputChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {Feeder.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            name='dtr'
                            id="outlined-select-currency-native"
                            select
                            required label="DTR:"
                            value={values.dtr}
                            onChange={handleInputChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {dtr.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            name='meter'
                            id="outlined-basic"
                            label="METER"
                            variant="outlined"
                            value={values.meter}
                            onChange={handleInputChange}
                        >
                            {SubStation.map((option) => (
                                <option key={option.label} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>



                    <Grid container direction="row" justifyContent="center" alignContent="center" >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h6" display="inline">
                                If you already know the meter number, please enter here :</Typography>
                            <TextField />
                        </div>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignContent="cen   ter" >
                        <div component="form" noValidate spacing={3}>
                            <Typography variant="h7" display="inline">
                                From : </Typography>

                            <TextField
                                name='fromdate'
                                id="fromdate"
                                label="From "
                                type="date"
                                value={values.fromdate}
                                onChange={handleInputChange}
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}

                            />
                        </div>
                        <div>
                            <Typography variant="h7" display="inline">
                                To : </Typography>


                            <TextField
                                name='todate'
                                id="todate"
                                label="To"
                                type="date"
                                value={values.todate}
                                onChange={handleInputChange}
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}

                            />
                        </div>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignContent="right" paddingTop={3} >

                        <Grid item xs={2} spacing={1} justify="flex-end">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={handleSubmit}
                            >Submit</Button>
                        </Grid>
                        <Grid item xs={0} spacing={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="reset"
                                onClick={() => {
                                    alert('After submitting data cannot be deleted, would you like to proceed?');
                                }}
                            >Clear</Button>

                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
}

