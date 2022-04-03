import React from 'react';

// My Components

// MUI Components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// MUI Icons
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

// Custom Styling
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '2.1rem',
        fontSize: '1rem',
    },
}));

export default function ShowHintsButton(props) {
    const classes = useStyles();

    return (
        <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => props.toggleShowHints()}
        >
            <Box mr={2} display="flex" alignContent="center" >
                <HelpOutlineIcon />
            </Box>
            {props.showHints ? "Hide Hints" : "Show Hints"}
        </Button>
    )
}
    

    
