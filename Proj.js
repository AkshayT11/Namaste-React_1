
/**
 * <div id="parent">
 *  <div id="child">
 *      <h1><h1>
 *   </div>
 * </div>
 */


const parent = React.createElement("div",{id: "parent"},
   React.createElement("div",{id:"child"},
    React.createElement("h1",{},"Hello Im a Nested React ") 
      )
);


console.log(parent);

// const heading = React.createElement("h1",{},"Hello Im React first Project");
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

root.render(parent)