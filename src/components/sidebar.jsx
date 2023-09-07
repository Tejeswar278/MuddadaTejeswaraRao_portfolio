import React, { useRef } from "react"
import "./sidebar.css"
import {AiFillCloseCircle} from "react-icons/ai"
import {FaBars} from "react-icons/fa"

function Sidebar (){
    return (
        <div class="icon-bar">
            <a href="https://github.com/Tejeswar278" class="icon-style" target="_blank" className="icon-style"><i class="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/tejeswara-rao-muddada/" target="_blank" class="icon-style"><i class="fa fa-linkedin"></i></a>
            <a href="https://twitter.com/Tejeswa07052907" target="_blank" class="icon-style"><i class="fa fa-twitter"></i></a>
        </div>
    )
}

export default Sidebar