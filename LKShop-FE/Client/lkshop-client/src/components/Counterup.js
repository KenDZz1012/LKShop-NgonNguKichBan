import React, { useEffect, useRef, useState } from 'react'

 const Counterup = ({ start = 0, end }) => {
    const [state, setState] = useState(null);
    const ref = useRef(start);
    const accumulater = end / 20;
    const updatecurrentState = () => {
        if(ref.current < end){
            const result = Math.ceil(ref.current + accumulater)

            if(result > end) return setState(end)
            setState(result)
            ref.current = result
        }
        setTimeout(updatecurrentState, 50)
    }

    useEffect(()=>{
        let isMounted = true;
        if(isMounted){
            updatecurrentState();
        }
        
        return() =>(isMounted = false);
    })
  return (
    <div>{state}</div>
  )
}
export default Counterup