import React from "react";
import ReactDom from "react-dom";
import style from '../public/index.less';

ReactDom.render(
    <div className='a'>
        <h1 className='a_b'>hello, world!</h1>
        <p className='background'>test speed</p>
        <img src={require('Images/userImg240.png')} />
    </div>,
    document.getElementById("root")
);