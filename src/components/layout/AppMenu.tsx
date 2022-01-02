import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppDrawer from './AppDrawer';

export default function AppMenu(): JSX.Element {
  const frontEnd = ["Random Quote Machine", "Markdown Previewer", "Drum Machine", "Calculator", "Pomodoro Clock"];
  const dataViz = ["Bar Chart", "Scatterplot", "Heat Map", "Chloropleth Map", "Treemap Diagram"];
  const backEnd = ["Timestamp Microservice", "Request Header Parser", "URL Shortener", "Exercise Tracker", "File Metadata"];

  interface Category {
    category: string,
    links: string[]
  }
  
  const categoryList = [
    {
      category: "Free Code Camp Project Compilation",
      links: ["Home"]
    },
    {
      category: "Front End Development",
      links: frontEnd
    },
    {
      category: "Data Visualization",
      links: dataViz
    },
    {
      category: "Back End Development",
      links: backEnd
    }
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <AppDrawer categories={categoryList} />
        <Typography>
          Free Code Camp Project Compilation
        </Typography>
      </Toolbar>
    </AppBar>
  )
}