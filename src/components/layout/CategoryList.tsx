import { Box, Divider, Typography } from '@mui/material';
import LinkList from './LinkList';

export default function CategoryList({ category, links }: { category: string, links: string[] }): JSX.Element {
  
  return (
    <>
      <Box textAlign="center" p={2}>
        <Typography>
          {category}
        </Typography>
      </Box>
      <Divider />
      <LinkList links={links} />
      <Divider />
    </>
  )
}