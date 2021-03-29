import React,{ useState } from 'react'
import axios from 'axios'
import Textarea from './components/Textarea'
import './normalize.css'

function App(){
    const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, mollitia laboriosam expedita repudiandae dolore iste voluptatum enim totam! Ducimus numquam animi est nisi doloribus accusamus dicta. Architecto est dolores aut aliquam quas reprehenderit ad. Omnis hic, odit doloribus amet nam voluptatem, magnam ipsam cupiditate dignissimos officia veniam saepe est consequatur!`
    return(
        <div>
            <Textarea text={text} maxLength="40"/>
        </div>
    )
}

export default App;