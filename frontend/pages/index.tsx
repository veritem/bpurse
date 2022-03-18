import * as React from 'react'
import { NextPage } from 'next'
import LoginPage from './auth/login'

const IndexPage: NextPage = ()=>{
    return (
        <LoginPage />
    )
}

export default IndexPage;