import { useState } from 'react';
import Calculator from './components/Calculator';
import Nav from './components/Nav';
import Todo from './components/Todo';
import Notes from './components/Notes';

function App() {
  const [activeProject, setActiveProject] = useState(null);

  function renderProject() {
    switch (activeProject) {
      case 'Gulle':
        return <div className="text-center mt-20 text-white opacity-50">Gulle project coming soon!</div>;
      case 'Calculator':
        return <Calculator />;
      case "To-Do List":
        return <Todo />;
      case "Notes App":
        return <Notes />;
      default:
        return <div className="text-center mt-20 text-white opacity-50">Select a project from the navigation bar.</div>;
    }
  }

  return (
    <div>
      <Nav onSelectProject={setActiveProject}/>

      <div className="container mx-auto">
        {renderProject()}
      </div>
    </div>
  )
}

export default App
