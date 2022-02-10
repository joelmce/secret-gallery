import css from "./stylesheets/edit.module.css";

export default function Edit() {
  return (
    <>
      <div className={css.sidebar}>
        <div className={css.sidebar_items}>
          <li className={css.sidebar_item}>INFO</li>
          <li className={css.sidebar_item}>STATS</li>
          <li className={css.sidebar_item}>HELP</li>
        </div>
      </div>
      <div className={css.infobar}>
        <div className={css.infobar_title}>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue="My Awesome Gallery"
          />
          <div className={css.infobar_title_link}>
              <span>YOUR LINK</span>
              <p>adnlawndjnawjkdnjkawndjkaw</p>
          </div>
        </div>
      </div>
    </>
  );
}
