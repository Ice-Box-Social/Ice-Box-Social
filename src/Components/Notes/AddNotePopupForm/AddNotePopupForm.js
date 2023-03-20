import React from 'react';
import AddNote from '../AddNote';
import StickerPicker from '../StickerPicker/StickerPicker'
import './AddNotePopupForm.css'
import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

export const AddNotePopupForm = (
) => {

  const [addNoteText, setAddNoteText] = useState("");
  const [selectedSticker, setSelectedSticker] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const handleAddNote = (event) => {
    event.preventDefault();
    alert(`You've submitted the following info: Text=${addNoteText}, colorIndex=${selectedColor}, stickerIndex=${selectedSticker}`)
  }

  return (
    <div className='add-note-popup-form'>
      <div className='new-sticker-heading'>New Sticker</div>
      <div className='new-sticker-subheading'>Leave your message on the sticky note!</div>
        <AddNote
          addNoteText={addNoteText}
          setAddNoteText={setAddNoteText}
          selectedSticker={selectedSticker}
          selectedColor={selectedColor}
          >
        </AddNote>
      <StickerPicker selectedSticker={selectedSticker} setSelectedSticker={setSelectedSticker}> </StickerPicker>
      <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor}></ColorPicker>
      <button className='submit-note-button' onClick={handleAddNote}>Post it</button>
    </div>
  );
};
export default AddNotePopupForm;