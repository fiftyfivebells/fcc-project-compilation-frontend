import { Button, Grid, Stack } from "@mui/material";
import React from "react";

export default function CalculatorButtons({ clickHandler }: { clickHandler: React.MouseEventHandler<HTMLButtonElement> }): JSX.Element {

  const buttons = [
    ['AC', 'CE', '\u232B', '\u00F7'],
    ['7', '8', '9', '\u00D7'],
    ['4', '5', '6', '\u02D7'],
    ['1', '2', '3', '\u002B'],
    ['.', '0', '^', '=']
  ];
  const operators = ['\u00F7', '\u00D7', '\u02D7', '\u002B', '='];

  return (
    <Stack
      sx={{ flexGrow: "1", width: "100%" }}
      direction="row"
    >
      <Grid container sx={{ width: "100%" }}>
        {
          buttons.map((group, i) =>
            <Grid container item key={i} sx={{ width: "100%" }}>
              {
                group.map((button, j) =>
                  <Grid key={button} item xs={3} md={3}>
                    <Button
                      onClick={clickHandler}
                      value={button}
                      variant={j === 3 ? "outlined" : "contained"}
                      fullWidth
                    >
                      {button}
                    </Button>
                  </Grid>
                )
              }
            </Grid>
          )
        }
      </Grid>
      {/*       <Grid container item xs={12} sx={{ border: "1px solid purple"}}>
        <Grid item >
          {
            operators.map(operator =>

              <Button
                key={operator}
                value={operator}
                onClick={clickHandler}
                variant="outlined"
                fullWidth
              >{operator}</Button>

            )
          }
        </Grid>
      </Grid> */}
    </Stack>
  )
}