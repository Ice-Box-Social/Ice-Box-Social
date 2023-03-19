import React from 'react';
import AddNote from '../AddNote'
import './AddNotePopupForm.css'

export const AddNotePopupForm = (
    { handleAddNote }
    ) => {
  return (
    <div>
      <div> New Sticker</div>
      <div> Leave your message on the sticky note</div>
      <div className='add-note-container'>
      <AddNote handleAddNote={handleAddNote}></AddNote>
      </div>
      <button className='submit-note-button'>Post it</button>
    </div>
  );
};
export default AddNotePopupForm;