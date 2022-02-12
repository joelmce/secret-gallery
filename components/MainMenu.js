import menu from './stylesheets/mainmenu.module.css'

export default function MainMenu(props) {
  let title = props.toggle

  if(title == "on") {
    return (
      <div className={menu.container} style={{display: block}}>
        This is a test
      </div>
    )
  } else {
    return (
      <div className={menu.container} style={{display: none}}>
        This is a test
      </div>

    )
  }




}
