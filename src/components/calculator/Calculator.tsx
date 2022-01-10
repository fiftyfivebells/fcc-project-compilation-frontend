import { Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import CalculatorButtons from './CalculatorButtons';
import CalculatorScreen from './CalculatorScreen';

export default function Calculator(): JSX.Element {

  const operators = ['\u00D7', '\u02D7', '\u002B', '\u00F7', '^'];

  const [equation, setEquation] = useState("");
  const [solution, setSolution] = useState("");

  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const element = e.target as HTMLInputElement;
    const val = element.value;

    switch (val) {
      case '\u00D7':
      case '\u02D7':
      case '\u002B':
      case '\u00F7':
      case '^':
        handleOperator(val);
        break;
      case '.':
        handleDecimalPoint();
        break;
      case '=':
        handleEquals();
        break;
      case 'AC':
        setEquation("");
        setSolution("");
        break;
      case 'CE':
        setEquation("");
        break;
      case '\u232B':
        setEquation(equation.slice(0, equation.length - 1));
        break;
      default:
        handleDigit(val);
    }
  }

  function computeSolution(operand1: number, operand2: number, operator: string): number {
    let answer: number;

    switch (operator) {
      case '\u00D7':
        answer = operand1 * operand2;
        break;
      case '\u02D7':
        answer = operand1 - operand2;
        break;
      case '\u002B':
        answer = operand1 + operand2;
        break;
      case '\u00B1':
        answer = operand1 / operand2;
        break;
      case '^':
        answer = Math.pow(operand2, operand1);
        break;
      default:
        answer = 0;
    }

    return answer;
  }

  function handleOperator(op: string): void {
    const front = equation[0];
    const newSolution = computeSolution(Number(equation.slice(1)), Number(solution), front);

    if (equation === "" && solution !== "") {
      setEquation(op);
    } else if (solution === "" || solution == "0" && equation !== "") {
      setSolution(equation);
      setEquation(op);
    } else if (operators.includes(front)) {
      setEquation(op);
      setSolution(String(newSolution));
    }
  }

  function handleDigit(digit: string): void {
    if (solution && !equation) {
      setSolution("");
      setEquation(digit);
    } else {
      if (digit === "0") {
        setEquation((equation === "0") ? "0" : (equation + "0"));
      } else if (equation === "0") {
        setEquation(digit);
      } else {
        setEquation(equation + digit);
      }
    }
  }

  function handleEquals(): void {
    const doesInclude = operators.some(op => equation.includes(op));

    if (!doesInclude) {
      if (equation) {
        setEquation("");
        setSolution(equation);
      }
    } else {
      const front = equation[0];
      const newSolution = computeSolution(Number(equation.slice(1)), Number(solution), front);
      setEquation("");
      setSolution(String(newSolution));
    }
  }

  function handleDecimalPoint(): void {
    if (!equation.includes(".")) {
      setEquation(equation + ".");
    }
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      sx={{
        width: "35vh",
        height: "100vh",
        margin: "0 auto"
      }}
    >
      <Grid container sx={{ width: "100%" }}>
        <Grid item sx={{ width: "100%" }}>
          <CalculatorScreen equation={equation} solution={solution} />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <CalculatorButtons clickHandler={handleClick} />
        </Grid>
      </Grid>
    </Stack>
  )
}