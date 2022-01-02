import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from 'react-router-dom';

export default function LinkList({ links }: { links: string[] }): JSX.Element {

  function linkToListItem(link: string): JSX.Element {
    const linkText = link.toLowerCase().split(" ").join("-");
    return (
      <Link key={link} style={{ textDecoration: "none", color: "black", }} to={link === "Home" ? "/" : `/${linkText}`}>
        <ListItemButton>
          <ListItemText primary={link} />
        </ListItemButton>
      </Link>
    );
  }

  const listItems: JSX.Element[] = links.map(linkToListItem);

  return (
    <List>
      {listItems}
    </List>
  );
}