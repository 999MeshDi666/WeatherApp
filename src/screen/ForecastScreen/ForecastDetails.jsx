import { ScrollView } from "react-native";
import InfoListItem from "../../components/InfoListItem";

const ForecastDetails = ({data}) =>{
  return(
    <ScrollView >
      {data.map((item, index) => (
        <InfoListItem 
          key={index}
          src={`https:${item.condition.icon}`} 
          style={{width: 50, height: 50}}
          info={`${item.condition.text} | ${item.time.split(" ")[1]}`}/>
      ))}
    </ScrollView>
  )
}
export default ForecastDetails;