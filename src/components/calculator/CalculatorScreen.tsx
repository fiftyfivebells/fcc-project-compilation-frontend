import { Box, Stack } from "@mui/material";


export default function CalculatorScreen({ equation, solution }: { equation: string, solution: string }): JSX.Element {

  const displayStyles = {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: "1",
    minHeight: "3vh",
    width: "100%"
  }

  return (
    <Stack
      sx={{ display: "flex", flexGrow: "1", border: "1px solid black", width: "100%" }}
      justifyContent="flex-end"
      direction="column">
      <Box
        sx={displayStyles}
      >
        {equation}
      </Box>
      <Box
        sx={displayStyles}
      >
        {solution}
      </Box>
    </Stack>
  );
}