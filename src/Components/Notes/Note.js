// import { MdDeleteForever } from 'react-icons/md';
import './Note.css';

const Note = ({ id, text, stickerIndex, noteColor}) => {

	var stickerNames = ["Heart","OK", "Sun", "Yes", "Star"];

	// basically derives the snowtype from the id string
	var snowType = (id.charCodeAt(id.length-1) % 2) + 1;

	return (
		<div className='ice-image'>
		<img src= {`./img/notes/Snowsmall${snowType}.svg`} className='snowsmall'></img>
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