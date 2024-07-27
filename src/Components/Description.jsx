import React from 'react'

function Description({descriptionStyle}) {
    console.log(descriptionStyle)

  return (
    <p className="description" style={descriptionStyle}>
            Hello, I’m <span>Dipan Sarkar</span> UX/UI Designer and <br />
            Front-end Developer Based in India❤️.
          </p>  )
}

export default Description