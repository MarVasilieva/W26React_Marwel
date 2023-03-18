import './Hero.css';

function Hero (props)    {
    return (
<div className="App">
      <div className='hero'><strong>Имя:</strong> {props.name}
        <div className='universe'><strong>Вселенная: </strong>{props.universe}</div>
        <div className='alterego'><strong>Альтер-эго: </strong>{props.alterego}</div>
    <div className='occupation'><strong>Род деятельности: </strong> {props.occupation}</div>
    <div className='superpowers'><strong>Суперсилы: </strong> {props.superpowers}</div>
    <img  src={props.url}></img>
  </div>
  
    </div>
    );
}

export default Hero;