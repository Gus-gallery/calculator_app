import React from 'react'
import { useState } from 'react'

const projects = [
    "Calculator",
    "To-Do List",
    "Notes App"
]

const Nav = ({ onSelectProject }) => {
    
  return (
    <section id="nav" className="text-white p-4 flex justify-between items-center">
        <h1 onClick={() => onSelectProject("Gulle")} className="font-bold cursor-pointer">
            Gulle's Apps
        </h1>
        <p className="text-sm font-regular">
            {projects.map((project, index) => (
                <span key={index} onClick={() => onSelectProject(project)} className="mx-2 opacity-50 hover:opacity-100 cursor-pointer">
                    {project}
                </span>
            ))}
        </p>

    </section>
  )
}

export default Nav