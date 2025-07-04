import React from 'react'
import { clsx } from 'clsx'

const Languages = ({langData, wrongGuessesCount}) => {

  return (
    <section className='languages-chips-section'>
        <div className='languages-chips'>
            {langData.map((lang, index) => {
                
                const className = clsx(index<wrongGuessesCount && "lost")

                return(
                    <span 
                        className={className}
                        key={lang.name} 
                        style={{
                            backgroundColor: lang.backgroundColor,
                            color: lang.color,
                        }}
                    >{index<wrongGuessesCount ? "💀" : lang.name}</span>
                )
            })}
        </div>
    </section>
  )
}

export default Languages