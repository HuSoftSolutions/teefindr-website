import classes from './Card.module.css';

function Card(props) {
  return <div className="border rounded bg-gray-200">{props.children}</div>;
}

export default Card;