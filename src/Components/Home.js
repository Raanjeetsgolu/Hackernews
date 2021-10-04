import React,{useState,useEffect,useRef}from 'react'
import { Link } from "react-router-dom";

import './Home.css'


const Home = ({idhandler}) => {
    const [inputval, setinputval] = useState();
    const [val, setval] = useState()
    const [newslist, setnewslist] = useState([])

    const inputRef=useRef(null);
    useEffect(()=>{
inputRef.current.focus();
    },[])
   
    useEffect(()=>{
        const info= async ()=>{
            try{
                fetch(`http://hn.algolia.com/api/v1/search?query=${val}`)
                .then((data)=>data.json())
                .then((value)=>setnewslist(value.hits))
                //console.log(value.hits)
            }catch{
                console.log('Facing Problem in fetching')
            }
        }
        info();
    },[val])

    const searchclick=()=>{
        setval(inputval)
    }
    const inputhandler=(e)=>{
        setinputval(e.target.value);

    }
    
   

    return (
        <div className="home">
            <div className="home_input_container">
            <input className="home_input" type="text" ref={inputRef} onChange={inputhandler} value={inputval} placeholder="Search"/>
           
            
            </div>
            
            <button className="home_Searchbtn" onClick={searchclick}>Search</button>
             <Link to="/details">
                
                <ol>
                {newslist.map((news)=>(
                    <li className="home_list" key={news.objectID} onClick={()=>idhandler(news.objectID)}>{news.title}</li>
                ))}
                </ol>
            </Link>
        </div>
    )
}

export default Home
