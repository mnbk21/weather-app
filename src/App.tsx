
import { useState } from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"

const App = () => {

  const [city , setCity] = useState<string>("")

  const getWeather = (event: any) => {
  // const getWeather = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    fetch("https://api.weatherapi.com/v1/current.json?key=456796f3a2c2465688f133550241806&q=London&aqi=no")
      .then(res => res.json())
      .then(data => console.log(data) )
  }

  return(
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results />
    </div>


  )
}

export default App