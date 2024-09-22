import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import { adminLogin } from '../../../ReduxToolkit/loginslice'

const Login = () => {
  const dispatch=useDispatch()


  const [data,setdata]=useState({})    // hamne kya kara ki user jo change karega usk store karake data me store kar lia 


  const navigate =  useNavigate();
  const token=localStorage.getItem("token")   // validate karne ke lia ham local storege bana ke check kara lete h ki kya token mil ra h 

  useEffect(()=>{
    if (token)
      navigate("/dashboard")
    
  },[])
  const handlechange=(e)=>{
    let {name,value}=e.target
    setdata({...data,[name]:value})  // hamne kya kara ki user jo change karega usk store karake data me store kar lia 
  }
  let handlesubmit=(e)=>{

    e.preventDefault();
    dispatch(adminLogin(data)).then((res)=>{

      // console.log(res,'resssssssssssssssss')
      if(res.payload.success)          //console.log(res.payload,'payload')
      {
        localStorage.setItem("token",res.payload.data.accessToken)
        navigate("/dashboard")
      }
      // else{
      //   alert('somthing went wrong')
        
      // }
    })

    }



  // })
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>


                      <CFormInput placeholder="Email" autoComplete=""
                      name='email'
                      onChange={handlechange}
                      type='email'
                      id='email'
                      required
                       />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>


                      <CFormInput
                        type="password"
                        name='password'
                        // value={password}
                        onChange={handlechange}
                      defaultValue=""
                      id='password'
                        placeholder="Password"
                        autoComplete="current-password"
                        required 
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>


                        <CButton onClick={handlesubmit}  type="submit"  color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">


                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
