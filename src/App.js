import './App.css';
import {useState} from "react";
import NotesList from './Components/Notes/NotesList';
import Navbar from './Components/Navbar/Navbar';

const App = () => {

  // The list of notes to display
  // TODO: Figure out how to fetch the notes list from database
  const [notes, setNotes] = useState([
    {
      id: 'testNoteId',
      text: 'Test Note',
      date: '16/03/2023',
    }
  ])

  // TODO: Implement adding a new note
  const addNote = (text) => {

		// const date = new Date();
		// const newNote = {
		// 	id: nanoid(),
		// 	text: text,
		// 	date: date.toLocaleDateString(),
		// };
		// const newNotes = [...notes, newNote];
		// setNotes(newNotes);
	};

  // TODO: Implement deleting a note? Nah probably not necessary
  const deleteNote = (id) => {
		// const newNotes = notes.filter((note) => note.id !== id);
		// setNotes(newNotes);
	};

  return (
    <div className="App">
            <Navbar />
      <div className='logo-img-div'>
        <img className='logo-img' src='./img/logo.svg'></img>
      </div>
              <NotesList 
            notes={notes}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}>
        </NotesList>
    </div>
  );
}

export default App;
