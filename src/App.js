import React from 'react';
import Student from './components/Student/Student'
import './App.css';
import { useState } from 'react';
import data from './data';

function App() {
  const [students, setStudents] = useState(data)
  const [text, setText] = useState('');
  console.log('text is', text);

  const search = (student) => {
    let searchStudent = student.filter((eachStudent) =>
      eachStudent.name.toLowerCase().includes(text.toLowerCase()));
    console.log('searchStudent is', searchStudent);
    return searchStudent;
  }

  return (
    <div className='Container'>
      <input
        className='Input'
        placeholder='search by name'
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      {search(students).length > 0 ? (search(students).map((item, index) => {
        const { name, age, course } = item;
        return (
          <Student key={index} name={name} age={age} course={course} />
        )
      })) : <div>
          no resultes
      </div>}
      {
      }

    </div>
  );
}

export default App;
