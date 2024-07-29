import React from 'react'

function ContactInfo({contactInfoStyle}) {
  return (
    <div className="contactInfo" style={contactInfoStyle}>
    <p>Email : dipansarkar1005@gmail.com</p>
    <a href="tel">call : +91 7003224488</a>
  </div>
  )
}

export default ContactInfo