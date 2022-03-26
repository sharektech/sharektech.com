import React from 'react';
import Prism from 'prismjs';

import data from './data';

import './style.scss';

const Quiz = ({ current, title }) => {
  const [code, setCode] = React.useState('');
  const [userAnswer, setUserAnswer] = React.useState(null);

  React.useEffect(() => {
    const html = Prism.highlight(
      data[current].code,
      Prism.languages.javascript,
      'javascript'
    );
    setCode(html);
  }, [current]);

  function handleAnswer(index) {
    setUserAnswer(index);
  }

  return (
    <div className="quiz">
      <h1>{title}</h1>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>

      <div className="choices">
        {data[current].options.map((value, index) => (
          <button
            key={index}
            disabled={userAnswer !== null}
            className={`choice ${
              userAnswer !== null
                ? // User has answered
                  data[current].answer === userAnswer
                  ? // Good Answer
                    userAnswer === index
                    ? 'answer'
                    : ''
                  : // Wrong Answer
                  userAnswer === index
                  ? 'wrong'
                  : data[current].answer === index
                  ? // Show the wright answer to user when his answer is wrong
                    'answer'
                  : ''
                : // User has not answered yet
                  ''
            }`}
            onClick={() => handleAnswer(index)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
