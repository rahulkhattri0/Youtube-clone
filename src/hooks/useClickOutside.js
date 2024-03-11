import { useEffect, useRef } from "react"

const  useClickoutside = (close,eventCapture) => {
    const ref = useRef(null)
    useEffect(()=>{
        function handleClose(event){
            console.log('exec')
            console.log(event.target)
            if(!ref.current.contains(event.target)){
                close()
            }
        }
        document.addEventListener('click',handleClose,eventCapture)
        return () => {
            document.removeEventListener('click',handleClose,eventCapture)
        }
    },[])
    return ref
}


export default useClickoutside