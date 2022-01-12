import React from 'react';
import { AppBar, Box, TextField, Typography } from "@mui/material";
import TextScreenProps from "./TextScreenProps";



export default function TextScreen({ props }: { props: TextScreenProps }): JSX.Element {

  return (
    <Box
      sx={{
        minHeight: "80vh",
        minWidth: "75vh",
        border: "3px solid black"
      }}
    >
      <AppBar
        sx={{
          display: "flex",
          alignItems: "center"
        }}
        position="static"
      >
        <Typography variant="h4">
          {props.title}
        </Typography>
      </AppBar>
      {
        props.html
          ? <div style={{ padding: "15px" }} dangerouslySetInnerHTML={{ __html: props.text }}></div> 
          : <TextField
              variant="outlined"
              multiline
              fullWidth
              value={props.text}
              onChange={props.handleChange}
            />
      }
    </Box>
  )
}