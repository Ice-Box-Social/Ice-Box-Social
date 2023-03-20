import { useState } from 'react';
import './AddNote.css'

const AddNote = ({addNoteText, setAddNoteText, selectedSticker}) => {
	const characterLimit = 256;


    // Limits note length to 156 chars as per design doc
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setAddNoteText(event.target.value);
		}
	};

	return (
		<div className='add-note-container'>
			<div className='note-new'>
			<textarea
				// rows='20'
				placeholder='Type to add a note...'
				value={addNoteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - addNoteText.length} Remaining
				</small>
				<img src={`./img/stickers/${selectedSticker}.svg`}></img>
			</div>
		</div>
		</div>
	);
};

export default AddNote;