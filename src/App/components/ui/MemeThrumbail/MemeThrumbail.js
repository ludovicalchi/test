import React from 'react';
import styles from './MemeThrumbail.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {MemeSVGViewer} from 'orsys-tjs-meme'
export const initialStateMemeThrumbail={};

const MemeThrumbail = (props) => {

  return (
    <div className={styles.MemeThrumbail} data-testid="MemeThrumbail">
      {
        props.memes.map((m,i)=> <div key={'thrumbail-meme-'+i}>
          <Link to={'/meme/'+m.i}>
            <MemeSVGViewer
            meme={m}
            image={props.images.find(im=>im.id === m.imageId)}
            basePath=''
            />
            <br />
            {m.titre}
          </Link>
        </div>)
      }
    </div>
  );
};
MemeThrumbail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired
}
export default MemeThrumbail;
export const MemeThumbnailStoreConnected = (props) => {
  const ressources = useSelector(s => s.ressources)
  return (
    <MemeThrumbail
      {...props}
      {...ressources}
    />)
}