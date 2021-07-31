import React from "react";

const Options = (props) => {
 return (
  <div>
   <button onClick={props.deleteAll}>Remove All Options</button>
   {
    props.options.map(elem =>
     <Option
      key={elem}
      optionText={elem}
      deleteOne={props.deleteOne}
     />
    )
   }
  </div>
 )
}
export default Options