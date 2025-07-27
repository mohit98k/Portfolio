import React from 'react'
import PropTypes from 'prop-types';
export const BlurBlob = (props) => {
  return (
    <div className='absolute'  
    style={{ 
            top:props.top,
            left: props.left,
            width: props.width,
            height: props.height,
          }}>
        <div className='w-full h-full opacity-20 rounded-full blur-3xl bg-purple-500 animate-blob'></div>
    </div>
  )
}

BlurBlob.propTypes={
    top: PropTypes.string,
    left: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}