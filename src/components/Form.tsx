
type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (event: React.FormEvent<HTMLFormElement>) => void
}


const Form = (props: FormProps) => {

  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="都市名を英語で入力" onChange={event => props.setCity(event.target.value)}/>

      <button type="submit">Get weather</button>
    
    </form>
  )
}

export default Form