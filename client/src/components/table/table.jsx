import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTable } from 'react-table';
import './table.css';


const Table = ({ responses }) => {
  const { id: surveyLink } = useParams();
  let checkData = responses;
  if (responses.length === 0) {
    checkData = [{ survey_id: 'n/a', author_name: 'n/a', answers: [{ question_id: 'No Questions', answer: 'n/a' }] }]
  }
  const firstRowAnswers = checkData[0].answers;
  const questionColumns = firstRowAnswers.map((answer, q) => ({ id: answer.question_id, Header: answer.question_id, accessor: (row, rowIndex) => row?.answers[q]?.answer }))
  const data = React.useMemo(
    () => checkData,
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: 'Survey',
        accessor: 'survey_id',
      },
      {
        Header: 'Respondee',
        accessor: 'author_name',
      },
      ...questionColumns
    ],
    []
  );
  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  if (!responses.length) return <Link to={`/survey/${surveyLink}`}><h3 className="error-message">No responses yet, click here to be the first ...</h3></Link>
  return (
    <div className="table__wrapper">

      <table {...getTableProps()} >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default Table;
