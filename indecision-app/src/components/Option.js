import React from "react";

const Option = (props) => {
 return (
  <div>
   <p key={props.optionText}>{props.optionText}</p>
   <button
    onClick={(e) => props.deleteOne(props.optionText)}
   >remove
   </button>
  </div>
 )
}
export default Option