import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState([]); // remembers the activities and sets them. Empty array initially.

  // is being called after this component mounted.
  useEffect(() => {
    fetch('https://localhost:5001/api/activties') // returns a pomise
      .then(response => response.json()) //unwrap the promise
      .then(data => setActivities(data))
  }, []); // list of dependencies at the end. Their upadtate will trigger the hook
  const title = "Activities:"
  return (
    <div>
      <h3 className="app" style={{color: "red", fontSize: 14}}>{title}</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  )
  
}
export default App
