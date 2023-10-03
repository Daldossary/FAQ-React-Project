import { useState } from 'react';
import './App.css';

const questions = [
  {
    id: 'q1',
    inquiry: "What is React?",
    answer: "React is a React is a JavaScript library for building user interfaces. It was created by Facebook in 2013 and is now one of the most popular web development libraries in the world." +
    "Some of the features of React are: it allows you to create reusable UI components that can be composed together, uses syntax called JSX that lets you write HTML-like code in JavaScript" +
    ", updates the UI automatically when the data changes, and using a technique called virtual DOM, also can be used to build single-page applications or integrate with other frameworks."
  }, {
    id: 'q2',
    inquiry: "What are some React frameworks?",
    answer: "Some React frameworks are as follows:\
     React Admin, and Ant Design. Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native)," +
    " and are easy to test. Create React App is a tool built by developers at Facebook to help you build React applications. It saves you from time-consuming setup and configuration. You simply run one command and create react app sets up the tools you need to start your React project." +
    " Rebass is a React UI component library that uses styled-components for styling. It provides a set of accessible, reusable, and composable React components that make it super easy to create websites and apps." +
    " React Admin is a frontend framework for building backends for web apps. It provides a rich set of components for interacting with your data, including: a datagrid, pagination, and filters." +
    " Ant Design is a React UI library that contains a set of high-quality components and demos for building rich, interactive user interfaces."
  }, {
    id: 'q3',
    inquiry: "Why should I use React?",
    answer: "React is remarkbly flexible. React was created with a single focus: to create components for web applications. A React component can be anything in your web application like a Button, Text, Label, or Grid." +
    " Also Your team will fall in love with React when they start coding in it. Rapid development and React's small API combined creates a fantastic developer experience." +
    " To add, React is heavily used in the Facebook app, website, and in Instagram. That's why Facebook is deeply committed to it. They use over 50k React components in their production environment. The top four React " + 
    "contributors on GitHub are full-time Facebook employees."
  }
];

function QuestionCard({ counter, inquiry, answer }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <h3>{inquiry}</h3>
      <button onClick={() => setOpen(!open)}>{open ? '-' : '+'}</button>
      <div className={ counter } style={open ? {display: 'block'} : {display: 'none'}}><p>{answer}</p></div>
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
