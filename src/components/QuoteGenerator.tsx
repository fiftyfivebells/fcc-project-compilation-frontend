import { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import fetchData from "../services/fetchData";

interface Quote {
  quote: string,
  author: string
}

interface Quotes {
  quotes: Quote[]
}

export default function QuoteGenerator(): JSX.Element {

  const [quotes, setQuotes] = useState([{ quote: "", author: "" }]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    async function quoteFetcher(): Promise<void> {
      const data = await fetchData<Quotes>("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
      setQuotes(data.quotes);
    }

    quoteFetcher();
  }, [quotes]);

  function handleClick() {
    const idx = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(idx);
  }

  function tweetQuote() {
    window.open(encodeURI(`https://twitter.com/intent/tweet?text=${quotes[quoteIndex].quote}`))
  }
  
  return (
    <Stack
      sx={{ minHeight: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Card>
        <CardContent>
          <Typography>
            {quotes[quoteIndex].quote}
            <br />
            <br />
            -{" "}{quotes[quoteIndex].author}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <Button size="small" variant="contained" onClick={tweetQuote}>TWEET</Button>
          <Button size="small" variant="contained" onClick={handleClick}>NEXT</Button>
        </CardActions>
      </Card>
    </Stack>
  );
}