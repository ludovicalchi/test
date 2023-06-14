import React, {useEffect} from 'react'
import { MemeFormStoredConnected } from '../components/functional/MemeForm/MemeForm'
import FlexH1Grow from '../components/layout/FlexH1Grow/FlexH1Grow'
import MemeSvgViewerConnected from '../components/functional/MemeSVGViewerConnected/MemeSVGViewerConnected'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../store/currentSlice';
import { useParams } from 'react-router-dom';

export default function Editor() {
    const d = useDispatch()
    const memes = useSelector(s => s.ressources.memes)
    const params = useParams()

    useEffect(() => {
        if (undefined !== params.id) {
            const toViewMeme = memes.find(m => m.id === Number(params.id))
            
            if (undefined === toViewMeme) {

            } else {
                d(update(toViewMeme))
            }
        }
    }, [params])

    return (
        <FlexH1Grow>
            <MemeSvgViewerConnected />
            <MemeFormStoredConnected />
        </FlexH1Grow>
    )
}
