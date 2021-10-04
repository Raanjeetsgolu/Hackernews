import React, { useEffect, useState } from "react";
import './Displayresult.css'

const Displayresult = ({ objetval }) => {
    const [detailist, setdetailist] = useState({});
    const [childlist, setchildlist] = useState([])
  useEffect(() => {
    const getdetails = async () => {
      try {
     const info =await   fetch(`http://hn.algolia.com/api/v1/items/${objetval}`)
         const data= await info.json()
         
              console.log(data);
              setdetailist(data);
              setchildlist(data.children)
      } catch {
          console.log('not ablue to fetch')
      }
    };
    getdetails();
  }, [objetval]);
  
  var parser = new DOMParser();
    const lit=childlist.map((va)=>(
        parser.parseFromString(va.text, "text/html") 
      
    ))
   
    
  return (
    <div className="postdetails">
      {childlist.length>0 ?
      <>
      <h1 className="postdetails_title">{detailist.title}</h1>
    <p className="postdetails_points"> Points : {detailist.points} </p>
    
    <ol className="postdetails_list">
     {
         lit.map((va)=>(
             <li className="postdetails_comment">{va.body.innerText}</li>
         ))
     }
     </ol>
     </> :<h1>Loading...</h1>
      }
     
     
     
    </div>
  );
};

export default Displayresult;
