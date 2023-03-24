function Card(props) {
  
  return (
    <div className="card">
    {props.src ? <img src={props.src} /> : ""}
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">{props.btntext}</a>
  </div>
</div>
  )
}

export {Card as default}
  
 