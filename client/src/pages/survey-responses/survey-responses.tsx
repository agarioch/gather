import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ParentSize } from '@visx/responsive';
import useGetSurveyResponses from '../../hooks/useGetSurveyResponses';
import useGetPost from '../../hooks/useGetPost';
import './survey-responses.css';
import '../../components/card/card.css';
import Table from '../../components/table/table';
import BarChart from '../../components/bar-chart/bar-chart';
import PieChart from '../../components/pie-chart/pie-chart';
import { UserContext } from '../../App';

type User = {
  name: string;
  picture: string;
  role: string;
};
type Users = {
  [email: string]: User;
};

const SurveyResponses = () => {
  const { id } = useParams<{ id: string }>();
  // get survey answers ...
  const responsesQuery = useGetSurveyResponses(id);
  // get detail of surveys
  const postQuery = useGetPost(id);
  // get details of all users, not just respondees
  const users: Users = useContext(UserContext);
  console.log(users);

  // calculated data for dashboard
  const title: string = postQuery.isSuccess ? postQuery.data.title : 'Loading...';
  const respondees = postQuery.isSuccess ? postQuery.data.respondees : [];
  const pieChartData = [
    { type: 'completed', number: respondees?.length || 0, color: 'var(--success-outline)' },
    { type: 'not-completed', number: Object.keys(users).length || 0, color: 'var(--grey-700)' },
  ];

  return (
    <div className="dashboard">
      <h2>{title}</h2>
      <div className="dashboard__row">
        <div className="dashboard__card">
          <h3 className="dashboard__title">Response Rate</h3>
          <PieChart data={pieChartData} />
        </div>
        <div className="dashboard__card">
          <h3 className="dashboard__title">Users</h3>
          <ul className="fa-ul">
            {Object.keys(users).map((key) => (
              <li>
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
      {responsesQuery.isSuccess && (
        <div className="dashboard__card">
          <Table responses={responsesQuery.data} />
        </div>
      )}
      <div className="dashboard__chart">
        <ParentSize>
          {(parent) => <BarChart width={parent.width} height={parent.height} />}
        </ParentSize>
      </div>
    </div>
  );
};

export default SurveyResponses;
