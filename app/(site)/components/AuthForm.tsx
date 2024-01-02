'use client'

import React, { useCallback, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

interface Props {}

const AuthForm = (props: Props) => {
	// State Variables
	const [variant, setVariant] = useState<'LOGIN' | 'REGISTER'>('LOGIN')
	const [loading, setLoading] = useState(false)

	const toggleVariant = useCallback(() => {
		setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN'))
	}, [])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	})

	return <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'></div>
}

export default AuthForm
