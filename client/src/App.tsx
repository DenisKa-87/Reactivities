import { ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState<Activity[]>([]); // remembers the activities and sets them. Empty array initially.

  // is being called after this component mounted.
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities') // returns a pomise
      .then(response => setActivities(response.data))
  }, []); // list of dependencies at the end. Their upadtate will trigger the hook
  const title = "Activities:"
  return (
    <>
      <Typography variant='h3'>{title}</Typography>
      <ul>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </ul>
    </>
  )
  
}
export default App
