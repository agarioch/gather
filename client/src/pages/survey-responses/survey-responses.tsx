import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import useGetSurveyResponses from '../../hooks/useGetSurveyResponses';
import useGetPost from '../../hooks/useGetPost';
import './survey-responses.css';
import '../../components/card/card.css';
import Table from '../../components/table/table';
import BarChart from '../../components/bar-chart/bar-chart';
import PieChart from '../../components/pie-chart/pie-chart';
import { UserContext } from '../../App';
import Loader from '../../components/loader/loader';

function countAnswers(options: string[], answers: string[]) {
  const countArr = [];
  for (let option of options) {
    countArr.push({ option: option, count: answers.filter((answer) => answer === option).length });
  }
  return countArr;
}

const SurveyResponses = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const { id } = useParams<{ id: string }>();
  // get detail of surveys
  const postQuery = useGetPost(id);
  // get details of all users, not just respondees
  const users = useContext(UserContext);
  // get survey answers ...
  const responsesQuery = useGetSurveyResponses(id);

  // Get survey name from posts query
  const title: string = postQuery.isSuccess ? postQuery.data.title : 'Loading...';
  // Get respondee emails from posts query
  const respondees = postQuery.isSuccess ? postQuery.data.respondees : [];
  // Store questions from posts query
  const questions = postQuery.isSuccess && postQuery.data.survey ? postQuery.data.survey : [];
  // Get selected question ID (default first question)
  const selectedQuestionId = questions[selectedQuestion]?._id;
  const selectedOptions = questions[selectedQuestion]?.options
    ? questions[selectedQuestion].options || []
    : [];

  const selectedAnswers =
    responsesQuery.isSuccess && selectedQuestionId
      ? responsesQuery.data.map(
          (response) =>
            response.answers.filter((answer) => answer.question_id === selectedQuestionId)[0].answer
        )
      : [];

  const barChartAnswerCounts = countAnswers(selectedOptions, selectedAnswers);

  const pieChartResponseCounts = [
    { type: 'completed', number: respondees?.length || 0, color: 'var(--success-outline)' },
    { type: 'not-completed', number: Object.keys(users).length || 0, color: 'var(--grey-700)' },
  ];
  if (responsesQuery.isSuccess && postQuery.isSuccess) {
    return (
      <div className="dashboard">
        <h2>{title} Outcomes</h2>
        <div className="dashboard__row">
          <div className="dashboard__card">
            <h3 className="dashboard__title">Response Rate</h3>
            <PieChart data={pieChartResponseCounts} />
          </div>

          <div className="dashboard__card">
            <h3 className="dashboard__title">Team</h3>
            <div className="dashboard__users">
              <ul className="fa-ul">
                {Object.keys(users)
                  .sort((a, b) => (users[b].name > users[a].name ? -1 : 1))
                  .map((key) => (
                    <li key={key}>
                      <span className="fa-li">
                        {respondees?.includes(key) ? (
                          <i className="fas fa-sm fa-check-circle dashboard__done"></i>
                        ) : (
                          <i className="far fa-sm fa-circle dashboard__pending"></i>
                        )}
                      </span>
                      {users[key].name} <span className="dashboard__email">{key}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="dashboard__row">
          <div className="dashboard__card">
            <h3 className="dashboard__title">Questions</h3>
            <ul className="dashboard__list">
              {questions.map((q, i) => (
                <li key={q._id}>
                  {i === selectedQuestion ? (
                    <i className="fas fa-sm fa-check-circle dashboard__done"></i>
                  ) : (
                    <i className="far fa-sm fa-circle dashboard__pending"></i>
                  )}
                  <button
                    className="btn btn-tertiary"
                    onClick={() => setSelectedQuestion(i)}
                    style={{ textAlign: 'left', color: 'var(--grey-800)' }}
                  >
                    {q.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="dashboard__card">
            <h3 className="dashboard__title">Response Distribution</h3>
            <div className="dashboard__chart">
              {questions[selectedQuestion].type === 'radio' ? (
                <BarChart width={600} height={400} data={barChartAnswerCounts} />
              ) : (
                <ul style={{ width: 600 }}>
                  {selectedAnswers.map((answer) => (
                    <li>{answer}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="dashboard__row">
          <div className="dashboard__card">
            <h3 className="dashboard__title">All responses</h3>
            <Table responses={responsesQuery.data} />
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default SurveyResponses;
