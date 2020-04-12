import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  },[]);

  async function handleAddProject() {
    const response = await api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Vinícius Diehl de Franceschi',  
    });
    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Header Title">
        <ul>
          { projects.map(project => (
            <li key={ project.id }>{ project.title }</li>
          ))}
        </ul>
        <button onClick={handleAddProject}>Adicionar Projeto</button>
      </Header>
    </>
  );
}

export default App;