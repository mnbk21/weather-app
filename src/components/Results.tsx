
type ResultsProps = {
  // 型指定はそのデータ構造と同じにする必要があるので、一段深くなっている
  results: {
    country: string,
    cityName: string,
    temperature: string,
    conditionText: string,
    icon: string,
  }

}

const Results = (props: ResultsProps) => {
  return (
    <h1>気象データ{props.results.country}</h1>
  )
}

export default Results