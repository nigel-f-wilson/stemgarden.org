import React from 'react';

// Custom Components

// MUI Components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// MUI Icons

// Custom Styling
import '../../styles/App.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '2.1rem',
        fontSize: '1rem',
    },
    selectedButton: {
        color: theme.palette.common.white,
        backgroundColor: 'rgba(46, 107, 18, 1.0)',
    },
    unselectedButton: {
        color: '#999999',
        backgroundColor: 'rgba(46, 107, 18, 0.5)',
    },
    
}));

export default function DifficultyModeButtons(props) {
    const classes = useStyles();

    let easyButton = (
        <Button
            className={`${classes.button} ${props.difficultyMode === "easy" ? classes.selectedButton : classes.unselectedButton} `}
            variant={'contained'}
            onClick={() => props.handleDifficultyModeChange("easy")}
        >
            Easy
        </Button>
    )

    let mediumButton = (
        <Button
            className={`${classes.button} ${props.difficultyMode === "medium" ? classes.selectedButton : classes.unselectedButton} `}
            variant={'contained'}
            onClick={() => props.handleDifficultyModeChange("medium")}
        >
            Medium
        </Button>
    )

    let hardButton = (
        <Button
            className={`${classes.button} ${props.difficultyMode === "hard" ? classes.selectedButton : classes.unselectedButton} `}
            variant={'contained'}
            onClick={() => props.handleDifficultyModeChange("hard")}
        >
            Hard
        </Button>
    )


    return (
        <Grid container spacing={3} >
            <Grid item xs={4}  >
                {easyButton}
            </Grid>
            <Grid item xs={4}  >
                {mediumButton}
            </Grid>
            <Grid item xs={4}  >
                {hardButton}
            </Grid>
        </Grid>
    )
}