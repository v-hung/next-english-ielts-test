import React, { Dispatch, SetStateAction } from 'react'
import { GroupQuestionState } from '../content/PracticeContent';
import styles from "./english.module.css";

const Single = ({
  groupQuestion, answers, setAnswers
}: {
  groupQuestion: GroupQuestionState,
  answers: {
    questionId: string;
    answer: string;
  }[],
  setAnswers: Dispatch<SetStateAction<{
    questionId: string;
    answer: string;
  }[]>>
}) => {

  const handelChange = (value: string | null, id: string) => {
    setAnswers(state => state.map(v => ({
      ...v,
      answer: v.questionId == id ? value || '' : v.answer
    })))
  }

  return (
    <div className={`flex flex-col space-y-4 ${styles.trueFalse}`}>
      { groupQuestion.questions.map(v => 
        <div key={v.id} className="rounded-xl px-4 py-3 bg-white">
          <div className="question">
            <span>{v.number}</span>
            <span className="icon !text-sm">arrow_right_alt</span>
            <span className="font-semibold">{v.questionName}</span>
          </div>

          <div className="flex flex-col space-y-1 -mx-3 mt-2">
            <div 
              className={`btn-answer ${answers.find(v2 => v2.questionId == v.id)?.answer == v.optionA ? 'active' : ''}`}
              onClick={(e) => handelChange(v.optionA, v.id)}
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-gray-200 font-semibold">A</span>
              <span>{v.optionA}</span>
            </div>

            <div 
              className={`btn-answer ${answers.find(v2 => v2.questionId == v.id)?.answer == v.optionB ? 'active' : ''}`}
              onClick={(e) => handelChange(v.optionB, v.id)}
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-gray-200 font-semibold">B</span>
              <span>{v.optionB}</span>
            </div>

            <div 
              className={`btn-answer ${answers.find(v2 => v2.questionId == v.id)?.answer == v.optionC ? 'active' : ''}`}
              onClick={(e) => handelChange(v.optionC, v.id)}
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-gray-200 font-semibold">C</span>
              <span>{v.optionC}</span>
            </div>

            <div 
              className={`btn-answer ${answers.find(v2 => v2.questionId == v.id)?.answer == v.optionD ? 'active' : ''}`}
              onClick={(e) => handelChange(v.optionD, v.id)}
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-gray-200 font-semibold">D</span>
              <span>{v.optionD}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Single