import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Signup() {
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');
const [gender,setGender]=useState('');
const [age,setAge]=useState('');
const [phone,setPhone]=useState('');
const [address,setAddress]=useState('');
const [email,setEmail]=useState('');


  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

// const submitHandler=(e)=>{
//   console.log('Signing up with:', username, password, gender, age, phone, address, email);
//   e.preventDefault();
//     const form = document.getElementById('formdata');
//     const formData = new FormData(form);
//     const apiurl = new URL("https://c4f1-110-226-178-35.ngrok-free.app/api/patients/")
//     fetch(apiurl, {method: 'POST', body: formData})
//     .then(res => res.json())
//     .then((data) => console.log(data))
//     console.log(formData);

// }

const submitHandler = (e) => {
    console.log('Signing up with:', username, password, gender, age, phone, address, email);

  e.preventDefault();

  const form = document.getElementById('formdata');
  const formData = new FormData(form);
  // const apiurl = new URL("https://64b8-2401-4900-1afe-1536-1df9-48e3-47f5-34d2.ngrok-free.app/api/signup/");
  // fetch(apiurl, { method: 'POST', body: formData })
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log('Success:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });

  // fetch(apiurl, { method: 'POST', body: formData })
  // .then((res) => {
  //   console.log('Response status:', res.status);
  //   return res.json();
  // })
  // .then((data) => {
  //   console.log('Success:', data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });
  var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  fetch("https://64b8-2401-4900-1afe-1536-1df9-48e3-47f5-34d2.ngrok-free.app/api/signup/", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

};






const submitLoginHandler=()=>{
  console.log('Singing in with: ',email,password);
}


  return (
    <>

    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='User name' name='username' id='form1' type='email' onChange={(e)=>setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' name='password' type='password' onChange={(e)=>setPassword(e.target.value)}  />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick={submitLoginHandler}>Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>


 {/* REGISTER */}
          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>
        <form id="formdata">
        <MDBInput wrapperClass='mb-4' label='username' name="username" id='form1' type='text' onChange={(e)=>setUsername(e.target.value)}  />
          <MDBInput wrapperClass='mb-4' label='Password' name="password" id='form1' type='password' onChange={(e)=>setPassword(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Gender' id='form1' name="gender" type='text' onChange={(e)=>setGender(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Age' id='form1' name="age" type='number' onChange={(e)=>setAge(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Phone' id='form1' name="phone" type='number' onChange={(e)=>setPhone(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Address' id='form1' name="address" type='text' onChange={(e)=>setAddress(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' name="email" type='email' onChange={(e)=>setEmail(e.target.value)}/>
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={ submitHandler}>Sign up</MDBBtn>
          </form>




        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
   


    </>
  );
}

export default Signup;