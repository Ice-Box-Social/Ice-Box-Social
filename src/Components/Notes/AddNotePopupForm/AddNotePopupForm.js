import React from 'react';
import AddNote from '../AddNote';
import StickerPicker from '../StickerPicker/StickerPicker'
import './AddNotePopupForm.css'
import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import { NFTStorage, Blob } from 'nft.storage'
import { message } from 'antd';

export const AddNotePopupForm = ({closeModal}) => {

  const [addNoteText, setAddNoteText] = useState("");
  const [selectedSticker, setSelectedSticker] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [loading,setLoading] = useState(false);

  const handleAddNote = async(event) => {
    event.preventDefault();
    if(loading) return;
    if(addNoteText === ''){
      message.error("Notes cannot be empty");
      return;
    }
    setLoading(true);
    const nftstorage = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE_KEY })
    const data = new Blob([{
      text:addNoteText,
      color:selectedColor,
      sticker:selectedSticker
    }])
    const cid = await nftstorage.storeBlob(data);
    console.log(cid);
    message.success("Notes Added Successfully!")
    setLoading(false);
    closeModal();
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
      <button className='submit-note-button' onClick={handleAddNote}>{loading?"Loading...":"Post it"}</button>
    </div>
  );
};
export default AddNotePopupForm;