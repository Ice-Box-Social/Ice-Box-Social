import React from 'react';
import AddNote from '../AddNote';
import StickerPicker from '../StickerPicker/StickerPicker'
import './AddNotePopupForm.css'
import { useState } from 'react';

export const AddNotePopupForm = (
) => {

  const [addNoteText, setAddNoteText] = useState("");
  const [selectedSticker, setSelectedSticker] = useState(0);

  const handleAddNote = (event) => {
    event.preventDefault();
    alert(`You've submitted the following info: ${addNoteText}`)
  }

  return (
    <div className='add-note-popup-form'>
      <div className='new-sticker-heading'>New Sticker</div>
      <div className='new-sticker-subheading'>Leave your message on the sticky note!</div>
        <AddNote
          addNoteText={addNoteText}
          setAddNoteText={setAddNoteText}
          selectedSticker={selectedSticker}
          >
        </AddNote>
      <StickerPicker selectedSticker={selectedSticker} setSelectedSticker={setSelectedSticker}> </StickerPicker>
      <button className='submit-note-button' onClick={handleAddNote}>Post it</button>
    </div>
  );
};
export default AddNotePopupForm;