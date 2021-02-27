import React from 'react';

function Header(props) {
    return (
        <header>
            <div className="menu">
                <Logo img="https://picsum.photos/50/50"></Logo>
                <h1>this is the {props.title} </h1>
            </div>
        </header>
    )
}

function Logo(props) {
    return (
        <div className="logo">
            <img src={props.img} alt="" />
        </div>
    )
}

export { Header, Logo };