// import { MdDeleteForever } from 'react-icons/md';
import './Note.css';
import * as React from 'react';

const Note = ({ id, text, stickerIndex, noteColor }) => {

	var stickerNames = ["Heart", "OK", "Sun", "Yes", "Star"];

	// basically derives the snowtype from the id string
	var snowType = (id.charCodeAt(id.length - 1) % 2) + 1;

	var shortenedId = id.substring(0, Math.min(20, id.length)) + '...';

	return (
		<div className='ice-image'>
			<img src={`./img/notes/Snowsmall${snowType}.svg`} alt='snow' className='snowsmall'></img>
			<div className='note' style={{ backgroundColor: noteColor }}>
				<div className='share-button'>
					<button
						className='share-button-task'
						onClick={() => {
							alert('Share button clicked');
						}}>
						<img src="./img/notes/Share-button.svg" alt='share button'></img>
					</button>
				</div>
				<span>{text}</span>
				<div className='note-footer'>
					<img src='./img/notes/scroll.svg' alt='wallet icon'></img>
					<small>{shortenedId}</small>
					<img src={`./img/stickers/${stickerNames[stickerIndex]}.svg`} alt="Sticker" />
				</div>
			</div>
		</div>
	);
};

export default Note;