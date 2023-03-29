import React from 'react'

import './Start.css'

import { Button, Card, Grid  } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

function LevelDock() {
  const lvStyle = {
    width: '70%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right'
  }

  const iconStyle = {
    paddingRight: 15,
    marginTop: 10
  }

  const padd = {
    paddingBottom: '5vh'
  }

  return (
    <div className='level-dock'>
      <div
        style={padd}
      >
        <Card variant="outlined">
          <div 
            style={lvStyle}
          >
            <div 
              style={iconStyle}
            >
              <PlayArrowIcon fontSize="large" color="primary"/>
            </div>
            Level 1
          </div>
        </Card>
      </div>
      

      <div
        style={padd}
      >
        <Card variant="outlined">
          <div 
            style={lvStyle}
          >
            Level 2
          </div>
        </Card>
      </div>

      <div
        style={padd}
      >
        <Card variant="outlined">
          <div 
            style={lvStyle}
          >
            Level 3
          </div>
        </Card>
      </div>

      <div
        style={padd}
      >
        <Card variant="outlined">
          <div 
            style={lvStyle}
          >
            Level 4
          </div>
        </Card>
      </div>
      
    </div>
  )
}

function MainView() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Button
        style={{
            borderRadius: 5,
            backgroundColor: "#E7EBF0",
            padding: "18px 36px",
            fontSize: "100px",
            color: 'black',
            opacity: 0.7,
            padding: 50
        }}
        variant="contained"
      >
        Start
      </Button>
    </div>
  )
}

export function Start(params) {
  return (
    <Grid container columns={16} spacing={0} style={{ height: "500px" }}>
      <Grid item xs={3}>
        <LevelDock />
      </Grid>
      <Grid item xs={13}>
        <MainView />
      </Grid>
    </Grid>
  )
}