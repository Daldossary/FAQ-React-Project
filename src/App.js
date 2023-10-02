import './App.css';

const questions = [
  {
    id: 1,
    inquiry: "What is React?",
    answer: "React is a React is a JavaScript library for building user interfaces. It was created by Facebook in 2013 and is now one of the most popular web development libraries in the world." +
    "Some of the features of React are: - It allows you to create reusable UI components that can be composed together. <br> - It uses a syntax called JSX that lets you write HTML-like code in JavaScript." +
    "<br> - It updates the UI automatically when the data changes, using a technique called virtual DOM. <br> - It can be used to build single-page applications or integrate with other frameworks."
  }, {
    id: 2,
    inquiry: "What are some React frameworks?",
    answer: "Some React frameworks include: <br> - Redux <br> - Create React App <br> - Rebass" +
    "<br> - React Admin <br> - Ant Design"
  }, {
    id: 3,
    inquiry: "Why should I use React?",
    answer: "React is remarkbly flexible. React was created with a single focus: to create components for web applications. A React component can be anything in your web application like a Button, Text, Label, or Grid." +
    " Also Your team will fall in love with React when they start coding in it. Rapid development and React's small API combined creates a fantastic developer experience." +
    " To add, React is heavily used in the Facebook app, website, and in Instagram. That's why Facebook is deeply committed to it. They use over 50k React components in their production environment. The top four React " + 
    "contributors on GitHub are full-time Facebook employees."
  }
];

function ShowButton() {
  return <button>+</button>;
}

function QuestionCard({ counter, inquiry, answer }) {
  return (
    <div>
      <h3>{inquiry}</h3>
      <ShowButton/>
      <div className={counter}>
        <p>{answer}</p>
        </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      {questions.map((question) => (
        <QuestionCard counter={question.id} inquiry={question.inquiry} answer={question.answer} />
        ))}
    </div>
  );
}
