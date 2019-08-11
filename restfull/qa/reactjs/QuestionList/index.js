import React from 'react'
import {QUESTION_API} from '../api'
import axios from 'axios'
import QuestionItem from './QuestionItem'


class QuestionList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: null,
        }
    }

    // Call api in this method
    componentDidMount() {
        axios.get(QUESTION_API)
            .then(response => {
                const questions = response.data
                this.setState({questions})
                console.log('Questions loaded')
            })
            .catch(error => {
                console.log(error);
            });
    }

    destroyQuestion(id) {
        const url = `${QUESTION_API}/${id}`
        axios.delete(url)
            .then(response => {
                this.setState(prevState => {
                    const questions = prevState.questions.filter(question => {
                        return question.id != id
                    })
                    return {questions}
                })
                console.log('Questions deleted')
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const {questions} = this.state

        return (
            <div>
                {questions && questions.map(question =>
                    <QuestionItem
                        key={question.title}
                        question={question}
                        onClick={() => {this.destroyQuestion(question.id)}}
                    />
                )}
            </div>
        )
    }
}


export default QuestionList