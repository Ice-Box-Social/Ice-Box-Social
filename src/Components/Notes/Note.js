// import { MdDeleteForever } from 'react-icons/md';
import './Note.css';
import star from './Star.svg';

const Note = ({ id, text, stickerIndex }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{id}</small>
				<img src={star} alt="Sticker" />
			</div>
		</div>
	);
};

export default Note;