import React from "react";
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const ComentDetalis = props => {

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" 	src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    )
}

export default ComentDetalis;