import React from 'react'
// Images
import Image from 'next/image'
import logo from '@/public/images/logo.png'

// Components
import AuthForm from './components/AuthForm'

interface Props {}

const page = (props: Props) => {
	return (
		<div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image src={logo} alt='Messenger Logo' height="48" width="48" className='mx-auto w-auto' />
        <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Sign in to your account</h1>
      </div>
      <AuthForm />
		</div>
	)
}

export default page
