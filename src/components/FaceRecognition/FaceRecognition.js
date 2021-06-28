import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, boxes }) => {
    let boxesDiv = [];
    boxes.forEach((item, index) => {
        boxesDiv.push(<div key={index} className='bounding-box' style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol }}></div>)
    })

    return (
        <div className='center ma'>
            <div className='absolute mt3'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' style={{maxWidth: '500px', width: '90%'}} />
                <div className='bounding-boxes'>{boxesDiv}</div>
            </div>
        </div>
    );
}

export default FaceRecognition;