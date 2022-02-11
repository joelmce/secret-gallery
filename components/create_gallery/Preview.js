import css from "../stylesheets/header.module.css";
import { Link } from 'react-router-dom'

export default function Preview(props) {

  const buttonStyle = {
    position: "absolute",
    top: 20,
    right: 20
  }

  return (
    <>
      <Link to="/new" className={`${css.primary_button} ${css.wbutton}`} style={buttonStyle}>
        Preview
      </Link>
    </>
  )
}
