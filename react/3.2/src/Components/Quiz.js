import "./quiz.css"
import QuizTitle from "./QuizTitle"
import Q1Title from "./Q1Title"
import Q1 from "./Q1"
import Q2Title from "./Q2Title"
import Q2Input from "./Q2Input"
const quizContainer = () => {
    return (
        <div className="quiz">
            <QuizTitle/>
            <Q1Title/>
            <Q1/>
            <Q2Title/>
            <Q2Input/>
        </div>
    )
}

export default quizContainer;