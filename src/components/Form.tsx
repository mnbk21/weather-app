
import { useState } from "react"

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (event: any) => void
}


// const Form = (props: FormProps) => {

  const Form = ({getWeather, setCity}: FormProps) => {

  // const [city , setCity] = useState<string>("")

  // // const getWeather = (event: any) => {
  // const getWeather = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  //   fetch("https://api.weatherapi.com/v1/current.json?key=456796f3a2c2465688f133550241806&q=London&aqi=no")
  //     .then(res => res.json())
  //     .then(data => console.log(data) )
  // }

  return (
    <form action="">
      {/* <input type="test" name="city" placeholder="都市名" onChange={event => props.setCity(event.target.value)}/> */}
      {/* <button type="submit" onClick={props.getWeather}>Get weather</button> */}

      <input type="test" name="city" placeholder="都市名" onChange={event => {setCity(event.target.value)}}/>
      <button type="submit" onClick={getWeather}>Get weather</button>
    </form>
  )
}

export default Form