import Card from "./Card"
export default function Card2(props) {
  const changeProps = {
    src: require("../images/img-2.png"),
    title: "Новый товар",
    text: "Подробное описание этого товара"
  }
  const newProps = {...props, ...changeProps};
  return (
    <Card {...newProps} />
  )
} 