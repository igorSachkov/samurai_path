// import loadingPNG from "../Images/preloading.gif"
//  const Preloader = () => {
//      return (
//         <img alt="loader" src={loadingPNG} />
//      )
//  }

//  export default Preloader



import FadeLoader from "react-spinners/FadeLoader";
import c from "./Preloader.module.css"
const Preloader = () => {

    return (
        
            <FadeLoader color={"green"} size={200} className={c.preloader} />
        



    )
}

export default Preloader





//  import { useState } from "react";
// import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";

// // Can be a string as well. Need to ensure each key-value pair ends with ;
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// function App() {
//   let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#ffffff");

//   return (
//     <div className="sweet-loading">
//       <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
//       <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

//       <ClipLoader color={color} loading={loading} css={override} size={150} />
//     </div>
//   );
// }