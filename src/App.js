import './App.css'
import Card from './components/Card';
import Card2 from './components/Card2';
import Cards from './components/Cards';

export default function App() {
  const defCardProps = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btntext: "Go somewhere"
  }
  
  return (
    <Cards>
    <Card {...defCardProps}  src={require("./images/img-1.png")}/>
    <Card {...defCardProps} btntext="Подробнее"/>
    <Card2 {...defCardProps} />    
    </Cards>     
    )
  }
  