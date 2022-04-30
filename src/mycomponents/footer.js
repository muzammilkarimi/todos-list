import React from 'react'

export default function Footer() {
  let footerstyle={
    position:"relative",
    width:"100%",
    top:"40vh",
    background:"#FF914D"
  }
  return (
    <footer className=" py-2" style={footerstyle}>
      <p className="text-center">
        copyright &copy; Makdesignstudio.com
      </p>
    </footer>
  )
}
