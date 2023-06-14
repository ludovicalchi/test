import React from 'react';
import {MemeSVGViewer} from 'orsys-tjs-meme'
import {useSelector} from 'react-redux';

const MemeSvgViewerConnected = (props) => {

  const storeProps = useSelector(storeState => {
    return {
      images: storeState.ressources.images,
      current: storeState.current
    }
  })

  return (
    <MemeSVGViewer 
            meme={storeProps.current} 
            image={storeProps.images.find(img=>{
              return img.id===storeProps.current.imageId
            })} 
            basePath=''/>
  );
};

export default MemeSvgViewerConnected;