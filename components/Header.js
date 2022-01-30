import header from ".//stylesheets/header.module.css";

const Header = props => (
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
        Secret Collective
      </a>
    </div>
    <div className="source_info">
      <a
        href="https://webflow.com/website/classNamebook-classNameguide-Template"
        target="_blank"
        className={`${header.create_an_experience} ${header.primary_button} ${header.wbutton}`}
      >
        Create an Experience
      </a>
    </div>
  </nav>
  {props.children}
</div>
);

export default Header;
