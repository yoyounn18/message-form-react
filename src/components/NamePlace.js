import React from 'react';
import './NamePlace.css';

const NamePlace = () => {
    return(
        <form className="name-form"> 
         <label>
           Name<br></br>
           <input className="text" type="text" name="name" />
           <br></br>
           Message<br></br>
           <textarea className="text-area"></textarea>
           <br></br>
                <div className="button-div">
                  <input className="submit" type="submit" value="Submit" />
                   </div>
          </label>
        </form>
    )
}

export default NamePlace;