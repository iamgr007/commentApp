import React from 'react';
import './App.css';


function comment() {
  return (
    <div className="App">
    <p>what would you like to share with world</p>

    <form>
      <textarea className="textArea">abcd</textarea>
  <input type="submit" value="Submit"  style={{marginLeft: "85px"}} />
</form>
<form>
<h1>Comment</h1> <button> filter </button>
<br/>
<div>
<label>user1@gmail.com</label>
<textarea className="textArea">This is a random comment.</textarea>
</div>
<div>
<label>user2@gmail.com</label>
<textarea className="textArea">This is a random comment.</textarea>
</div>
</form>
      </div>
  );
}

export default comment;
