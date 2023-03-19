import { useState } from 'react';
import './AddNote.css'

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 156;


    // Limits note length to 156 chars as per design doc
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

    // To handle clicking the save button
	const handleSaveClick = () => {
		// Ensures note is note empty
		if (noteText.trim().length > 0) {
			// handles new note
			handleAddNote(noteText);
			// resets state
			setNoteText('');
		}
	};

	return (
		<div className='add-note-container'>
			<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
		</div>
	);
};

export default AddNote;