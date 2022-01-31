import header from ".//stylesheets/header.module.css";

export default function Header(props) {
  return (
    <div>
      <nav className={header.navbar}>
        <div className={header.navbarinner}>
          <a href="#colors" className={header.navbarlink}>
            About
          </a>
          <a href="#" className={header.navbarlink}>
            FAQ
          </a>
          <a href="#forms" className={header.navbarlink}>
            Secret Collective {props.session}
          </a>
        </div>
        <div className="source_info">
          <a
            href="/connect"
            className={`${header.create_an_experience} ${header.primary_button} ${header.wbutton}`}
          >
            Create an Experience
          </a>
        </div>
      </nav>

      {props.children}
    </div>
  );
}
