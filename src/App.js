import './App.css';

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

  // TODO: Implement deleting a note? Nah probably note necessary
  const deleteNote = (id) => {
		// const newNotes = notes.filter((note) => note.id !== id);
		// setNotes(newNotes);
	};

  return (
    <div className="App">
    </div>
  );
}

export default App;
