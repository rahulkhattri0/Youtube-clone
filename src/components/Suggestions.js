import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import useClickoutside from '../hooks/useClickOutside'

const Suggestions = ({
    suggestions,
    setSuggestions,
    handleNavigate,
    activeSuggestion,
}) => {
    const suggestionsRef = useClickoutside(()=>setSuggestions([]),false)
  return (
    <div ref={suggestionsRef} className='bg-white z-10 absolute left-1/2 transform -translate-x-1/2 top-20 mx-auto w-1/2 rounded-md shadow-md dark:bg-gray-700 dark:text-white'>
        {
            suggestions.map((suggestion,idx)=>{
                return (
                    <div key={idx} 
                    className={`cursor-pointer flex gap-x-1 items-center hover:bg-slate-300 border-b-2 border-gray-200 m-2 p-1 rounded-md ${activeSuggestion===idx ? 'bg-slate-400' : ''}`}
                    onClick={()=>{
                            console.log('before')
                            handleNavigate()
                    }}>
                        <BiSearchAlt/>
                        <p>{suggestion}</p>
                    </div>  
                )
                
            })
        }
    </div>
  )
}

export default Suggestions