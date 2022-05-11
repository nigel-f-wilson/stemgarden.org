import React, { useContext } from 'react'
import { Box, Button, Typography, Zoom, Dialog,  } from '@mui/material';

// CONTEXT 
import { AppContext } from "../../../AppContext";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
})

export function WelcomeModal(props) {
    let { open, openSettingsModal } = props

    const { maxSquareSideLength } = useContext(AppContext)

    return (
        <Dialog
          open={open}
          aria-describedby="welcome dialog"
          TransitionComponent={Transition}
          fullWidth
          maxWidth='md'
          PaperProps={{
            sx: {
              height: `${0.85 * maxSquareSideLength}px`,
              width: `${0.7 * maxSquareSideLength}px`,
              minHeight: "550px",
              minWidth: "375px",
              display: 'flex',
              p: 3,
              borderRadius: 6,
              overflowY: "scroll",
              "msOverflowStyle": "none",    /* IE and Edge */
              "scrollbarWidth": "none",       /* Firefox */
              "::-webkit-scrollbar": {         /* Hide scrollbar for Chrome, Safari and Opera */
                display: "none"
              }
            }
          }}
        >
            
          <Typography variant='h4' align="center" >
            Math Fact Connect Four
          </Typography>
          
          <PlayNowButton openSettingsModal={openSettingsModal} />

          {/* TODO --> Add "sign in and play" beside "play without signing in" */}

          <Typography variant='h5'  >
            Rules of Play
          </Typography>
          <Typography gutterBottom  >
            Two players (or teams) take turns picking a column to drop a chip in.
            Chips always fall to the lowest available space in the selected column.
            The first to get four consecutive chips in any row, column, or diagonal wins!
            But there's a catch: A math quetion will pop up when you selecet a column and you must answer it correctly or your turn will be skipped!
          </Typography>
          
          <Typography variant='h5'>
              Suggested Use
          </Typography>
          <Typography gutterBottom  >
            Learning math foundations takes a lot of practice. There is no substitute for repetition. 
            The goal of this project is to make doing all that repetitive practice a little less dull, 
            and a little more joyful.
          </Typography>
          <Typography gutterBottom  >
            All the questions in this game were designed to be solved mentally.
            Use your fingers if you have to, but no paper-and-pencil! 
            Push yourself to try new mental math strategies like "stepping stones" and "factor it first".
          </Typography>
          <Typography gutterBottom  >
            By default the questions increase in difficulty as the game progresses but you can also 
            set it to ask questions of only one difficulty level throughout the game. This is particularly 
            useful when working with younger students. 
          </Typography>

          <Typography variant='h5' >
              Note on Time Limits
          </Typography>
          <Typography gutterBottom  >
            Some students enjoy playing this game with a two-sided game timer (chess clock). 
            When doing this it is good to give each team about 10 minutes for the whole game.
            That said, there is no timer built into this game on purpose. Most students report 
            feeling anxious and having less fun, and answer questions less accurately when playing with a timer.
          </Typography>
          <Typography gutterBottom  >
            Accuracy is more imporatant than speed. 
            Starting out, your focus should be on getting questions right, on holding all the
            moving pieces in your mind. Accuracy results from focus, conceptual understanding, and effort.
            Speed is just a pleasant side-effect of lots of practice.
          </Typography>

          <Typography variant='h5' >
              Thanks
          </Typography>
          <Typography gutterBottom  >
              I want to thank my students at College Track, the Waldorf School of New Orleans, and Bricolage Academy
              for inspiring me to create this game and helping me to test and improve it. This game was originally played
              using laminated cards hung on the wall. It was my students' enthusiastic responses to this game that made me 
              want to convert it to a free web app so I could share it with other teachers and students.
          </Typography>

          <Typography variant='h5'  >
              Dig Deeper
          </Typography>
          <Typography gutterBottom  >
              The code for this project is all open-source so if your are curious how it works behind the scenes visit my <a href='https://github.com/nolastemgarden' >GitHub</a> page.
              If you find a mistake or have an idea for how to improve this game, please open an issue.
          </Typography>
          <Typography color="text.primary" >
              A production of the NOLA STEM Garden &copy;
          </Typography>
        </Dialog>
    )

    function PlayNowButton() {
        return (
            <Box m={3} sx={{ display: 'flex', justifyContent: "center" }} >
                <Button
                  onClick={openSettingsModal}
                  variant='contained'
                  sx={{
                    m: 1,
                    width: '66%'
                  }}
                  children="Start Game"
                />
            </Box>
            
        )
    }
}

