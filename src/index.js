import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import ComentDetalis  from "./ComentDetalis";
import ApprovalCard from "./ApprovalCard";

const App = () => {
return (
    <div className="ui container comments">
          



        <ApprovalCard>
        <ComentDetalis
            author="sam20000"
            timeAgo="no45353nonon"
            text="teeee"

        />
        </ApprovalCard>
        <ApprovalCard>
       <ComentDetalis
           author="sam444"
           timeAgo="non4535onon"
           text="teeee"
       />
        </ApprovalCard>
            <ApprovalCard>
        <ComentDetalis
            author="sam28"
            timeAgo="nonono42545n"
             text="dfsdsd" />
            </ApprovalCard>

    </div>
);



};

ReactDOM.render(<App />, document.querySelector('#root'))

