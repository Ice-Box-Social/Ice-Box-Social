import Note from './Note';
import AddNote from './AddNote';
import './NotesList.css'

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list-container'>
					<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					stickerIndex = {note.stickerIndex}
					noteColor = {note.noteColor}
				/>
			))}
			{/* <AddNote handleAddNote={handleAddNote} /> */}
		</div>
		</div>
	);
};

export default NotesList;