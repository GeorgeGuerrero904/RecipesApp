import Banner from "./components/Banner/Banner"
import "./App.css"
import { useCallback, useState } from "react"
import navValues from "./navigation/navValues"
import navigationContext from "./navigation/navigationContext"
import ComponentPicker from "./components/global/ComponentPicker"

function App() {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );
  const [nav, setNav] = useState({ current: navValues.home, navigate });

  return (
    <navigationContext.Provider value={nav}>
      <Banner />
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  )
}

export default App
