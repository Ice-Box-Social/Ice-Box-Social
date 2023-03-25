import React from 'react';
import AddNote from '../AddNote';
import StickerPicker from '../StickerPicker/StickerPicker'
import './AddNotePopupForm.css'
import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import { NFTStorage, Blob } from 'nft.storage'
import { message } from 'antd';
import IceBoxContract from '../../../Contract/IceBoxMessage.json'
import { ethers } from 'ethers';

export const AddNotePopupForm = ({closeModal}) => {

  const [addNoteText, setAddNoteText] = useState("");
  const [selectedSticker, setSelectedSticker] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [loading,setLoading] = useState(false);

  const handleAddNote = async(event) => {
    try {
      event.preventDefault();
      if(loading) return;
      if(addNoteText === ''){
        message.error("Notes cannot be empty");
        return;
      }
      setLoading(true);
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(accounts[0]);
      console.log(IceBoxContract.abi);
      const Contract = new ethers.Contract("0xa4d2e7Bf238916CD0677D5C8D328b713114d8b94",IceBoxContract.abi,signer);
      const nftstorage = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE_KEY })
      const data = new Blob([{
        text:addNoteText,
        color:selectedColor,
        sticker:selectedSticker
      }])
      const cid = await nftstorage.storeBlob(data);
      console.log(cid);
      const response = await Contract.safeMint(accounts[0],cid);
      console.log(response);
      message.success("Notes Added Successfully!")
      setLoading(false);
      closeModal();
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
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