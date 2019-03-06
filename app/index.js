import React from "react";
import ReactDom from "react-dom";
import '../static/css/index.less';
import Container from "./component/home/view";

ReactDom.render(
		<div>
        <Container />
		</div>,
    document.getElementById("root")
);
