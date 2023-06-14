import React, {useState} from 'react';
import {MemeSVGViewer} from 'orsys-tjs-meme'
import {useSelector} from 'react-redux';
export const initialStateMemeSvgViewerConnected={};

const MemeSvgViewerConnected = (props) => {
  const [state, setState] = useState(initialStateMemeSvgViewerConnected);

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