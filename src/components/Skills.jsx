import html from "../assets/html.svg"
import css from "../assets/CSS.svg"
import js from "../assets/javascript.svg"
import reactIcon from "../assets/reactIcon.svg"
import tailwind from "../assets/tailwind.svg"
import git from "../assets/Git.svg"
import python from "../assets/python.svg"
import java from "../assets/java.svg"
import mysql from "../assets/mysql.svg"
import postgresql from "../assets/postgresql.svg"
import vscode from "../assets/vscode.svg"
import React from 'react'


const skillsData = [
        { name: "HTML", iconSrc: html },
        { name: "CSS", iconSrc: css },
        { name: "JavaScript", iconSrc: js },
        { name: "React", iconSrc: reactIcon },
        { name: "Tailwind CSS", iconSrc: tailwind },
        { name: "Git", iconSrc: git },
        { name: "Python", iconSrc: python },
        { name: "Java", iconSrc: java },
        { name: "MySQL", iconSrc: mysql },
        { name: "PostgreSQL", iconSrc: postgresql },
        { name: "VS Code", iconSrc: vscode },
]

const Skills = () => {
  return (
    <section className="py-16 md:py-24 min-h-screen flex flex-col items-center justify-center bg-[#00CC8E]"> 
        <h2 className = "text-4xl font-bold mb-10 text-white text-center animate-pulse">
                Skills and Tools
        </h2>
        <div className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
                {skillsData.map((skill, index) => { 
                        return (
                                <div key = {index} className="flex flex-col items-center justify-center shadow-md rounded-2xl p-6 hover:scale-105 transition-transform aspect-square bg-[#00CC8E] border border-white"> {/* Added aspect-square for consistent card shape */}
                                        <img
                                        src = {skill.iconSrc}
                                        alt = {`${skill.name} icon`}
                                        className = "wa-12 h-12 sm:w-16 sm:h-16 mb-3 object-contain"
                                        />
                                        <p className = "mt-2 text-sm font-medium text-shadow-white text-center"> 
                                            {skill.name}
                                        </p>
                                </div>
                        )
                })}
        </div>
    </section>
  )
}

export default Skills