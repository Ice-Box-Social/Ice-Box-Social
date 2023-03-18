// import { MdDeleteForever } from 'react-icons/md';
import './Note.css';

const Note = ({ id, text, stickerIndex }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{id}</small>
				<img src={"./img/Star.svg"} alt="Sticker" />
			</div>
		</div>
	);
};

export default Note;