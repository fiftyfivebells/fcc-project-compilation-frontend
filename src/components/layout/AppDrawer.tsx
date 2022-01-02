import { Divider, IconButton, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryList from './CategoryList';


interface CategoryProps {
  category: string,
  links: string[]
}

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function AppDrawer({ categories }: { categories: CategoryProps[] }): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();

  const listOfCategories: JSX.Element[] = categories.map(category => {
    return <CategoryList key={category.category} category={category.category} links={category.links} />
  });

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => { return null }}
        onClick={() => setOpen(!open)}
      >
        <div className={classes.list}>
          <Divider />
          {listOfCategories}
        </div>
      </SwipeableDrawer>
    </>
  );
}