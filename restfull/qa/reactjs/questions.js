import React from 'react'
import {render} from 'react-dom'
import QuestionList from './QuestionList'

window.React = React;

render(
    <QuestionList/>,
    document.querySelector('#questions')
);
