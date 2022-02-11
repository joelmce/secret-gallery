import css from "../stylesheets/header.module.css";
export default function Preview({linkto}) {
  const buttonStyle = {
    position: "absolute",
    top: 20,
    right: 20
  }

  return (
    <>
      <div className={`${css.primary_button} ${css.wbutton}`} style={buttonStyle}>
        Preview
      </div>
    </>
  )
}
