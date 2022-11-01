import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EmailData() {
  // input state
  const [userEmail,setUserEmail]=React.useState('');
  const [userMessage,setUserMessage]=React.useState('');
  // response state
  const [messageList,setMessageList]=React.useState(['']);
  // re receive message from server
//   const [getMessage,setGetMessage]=React.useState(true);

  // send mesage to server
 const handleSubmitFeedback=()=>{
  fetch('https://email-data-70504-default-rtdb.firebaseio.com//email-data.json',{
    method:'POST',
    headers:{
      'Context-Type':'application/json'
    },
    body:JSON.stringify({
      userEmail:userEmail
    })
  }).then((res)=>res.json())
  .then((data)=>{
    setUserMessage('');
    setUserEmail('');
  })
 }

  return (
    <div className="app-container">
      <div class="form-container">
      <TextField
          style={{borderRadius:'none !important'}}
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          value={userEmail}
          onChange={(e)=> setUserEmail(e.target.value)}
        />
           <Button style={{height:"54px",borderRadius:"0px"}}
           variant="contained" onClick={handleSubmitFeedback}>Submit</Button>
      </div>
    </div>
  );
}

export default EmailData;