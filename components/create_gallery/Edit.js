// import css from "../stylesheets/edit.module.css";

// if(typeof window !== 'undefined') {
//   const uploadDiv = document.getElementById('upload');
//   const uploadPrompt = document.getElementById('imgupload');

//   uploadDiv.addEventListener('click', function() {
//     uploadPrompt.click();
//   })
// }

// const toggleInfo = (e) => {
//   if(typeof window !== 'undefined') {
//     let element = document.getElementById('infobar');

//     if(element.style.display == "none") {
//       element.style.display = "block";
//     } else {
//       element.style.display = "none";
//     }
//   }
// }

// export default function Edit() {
//   return (
//     <>
//       <div className={css.sidebar}>
//         <div className={css.sidebar_items}>
//           <li className={css.sidebar_item} onClick={toggleInfo}>INFO</li>
//           <li className={css.sidebar_item}>STATS</li>
//           <li className={css.sidebar_item}>HELP</li>
//         </div>
//       </div>
//       <div className={css.infobar} id="infobar">
//         TITLE
//         <div className={css.infobar_item}>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             defaultValue="My Awesome Gallery"
//             className={css.infobar_title}
//           />
//           <div className={css.infobar_title_link}>
//               <span>YOUR LINK</span>
//               <p>https://secretcollective.io/my-awesome-gallery</p>
//           </div>
//         </div>

//         UPLOAD BANNER
//         <input type="file" id="imgupload" style={{display: "none"}}/>
//         <div className={css.infobar_item} id="upload">
//             <p className={css.infobar_upload}>Click here to upload</p>
//         </div>

//         DESCRIPTION
//         <div className={css.infobar_item}>
//             <textarea id="desc" name="desc" className={css.infobar_desc}/>
//         </div>
//       </div>
//     </>
//   );
// }
