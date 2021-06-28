import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div className='f3 mt4'>
            <p>
                {'This Magic Brain will detect faces in your pictures. Try for yourself!!'}
            </p>
            <div className='center form-width'>
                <div className='pa4 br3 form center shadow-5'>
                <input className='f4 pa2 w-70 center br2 shadow-2' type='text' placeholder="Enter a URL to an Image" onChange={onInputChange} />
                <button className='w-30 grow f4 link dib pv2 br2 shadow-2' onClick={onPictureSubmit}> Detect </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;