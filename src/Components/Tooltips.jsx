import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setToast } from '../redux/TooltipsSlice'
import CheckIcon from './CheckIcon'
import WarnIcon from './WarnIcon'
import ErrorIcon from './ErrorIcon'

const Tooltips = () => {
    const { severity, message } = useSelector(state => state.tooltips)
    let style = null;

    if(severity === 'success'){
        style = {
            backgroundColor: '#00D26A'
        }
    }else if(severity === 'error'){
        style = {
            backgroundColor: '#e4605e',
        }
    }else if(severity === 'warning'){
        style = {
            backgroundColor: '#e5be01',
        }
    }

    const dispatch = useDispatch()
    setTimeout(() => {
        dispatch(setToast('',''))
    },5000)
    
    
    if(message === ''){
        return null
    }

    return (
        <div style={style} className='flex absolute top-5 right-5 px-5 py-2 rounded-md justify-center items-center font-bold '>
            {severity === 'error' ? <ErrorIcon/>:
            severity === 'success' ? <CheckIcon/>:
            severity === 'warning'? <WarnIcon/> : null}{message}
        </div>
    )
}

export default Tooltips