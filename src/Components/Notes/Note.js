// import { MdDeleteForever } from 'react-icons/md';
import './Note.css';

const Note = ({ id, text, stickerIndex, noteColor}) => {

	var stickerNames = ["Heart","OK", "Sun", "Yes", "Star"];

	return (
		<div className='ice-image'>
		<img src= './img/notes/Snowsmall2.svg' className='snowsmall'></img>
		<div className='note' style={{backgroundColor: noteColor}}>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{id}</small>
				<img src={`./img/stickers/${stickerNames[stickerIndex]}.svg`} alt="Sticker" />
			</div>
		</div>
		</div>
	);
};

export default Note;