
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
    <div>
      {/* 「&&」ロジカルオペレーター：左辺がtrueの時だけ実行される(データが存在する時にだけ右辺を実行させる) */}
      
      {/* {props.results.country && <div>{props.results.country}</div>}
      {props.results.cityName && <div>{props.results.cityName}</div>}
      {props.results.temperature && <div>{props.results.temperature}<span>℃</span></div>}
      {props.results.conditionText && 
        <div>
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>
      } */}

      
      {/*「&&」ロジカルオペレーター：左辺がtrueの時だけ実行される(データが存在する時にだけ右辺を実行させる) */}
      {props.results.country &&
        <div>
          <div className="results-country">{props.results.country}</div>
          <div className="results-city">{props.results.cityName}</div>
          <div className="results-temp">{props.results.temperature}<span>℃</span></div>
          <div className="results-condition">
            <img src={props.results.icon} alt="icon" />
            <span>{props.results.conditionText}</span>
          </div>
        </div>
      
      }

    </div>
    
  )
}

export default Results