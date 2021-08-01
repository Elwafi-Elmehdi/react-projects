// import validator from 'validator'
import React from "react";
import ReactDOM from "react-dom";
import IndicisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndicisionApp />, document.getElementById("app"));

class OldSyntax {
	constructor() {
		this.name = "Mehdi";
	}
}
const old = new OldSyntax();
console.log(old);

class newSyntax {
	name = "Dahbi";
}
const newe = new newSyntax();
console.log(newe);
