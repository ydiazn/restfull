import React from 'react'


const QuestionItem = ({question, onClick}) => 
    <div>
        <h3>{ question.title }</h3>
        <div>
            <span>{ question.user }</span>
            <span>{ question.created }</span>
        </div>
        <p>{ question.body }</p>
        <button onClick={onClick}>Eliminar</button>
        <hr/>
    </div>


export default QuestionItem