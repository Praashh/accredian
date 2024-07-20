// @ts-nocheck

import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

function ReferralForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    const res = await axios.post(import.meta.env.VITE_BACKEND_URL + 'api/v1/referral/create', {
      referrerId: data.referrerId,
      userId: data.userId,
      courseId: "hiihihih",
      name:data.name,
      email:data.email
    });

    if(res.status == 201){
      confirm("referred please check your email");
    }else{
      confirm("something went wrong check your inputs");

    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          {...register('name', { required: 'Name is required' })}
          id="name"
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address',
            }
          })}
          id="email"
          type="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="referrerId" className="block mb-2 text-sm font-medium text-gray-700">
          Referrer ID
        </label>
        <input
          {...register('referrerId', { required: 'Referrer ID is required' })}
          id="referrerId"
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.referrerId && <p className="mt-1 text-sm text-red-500">{errors.referrerId.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-700">
          User ID
        </label>
        <input
          {...register('userId', { required: 'User ID is required' })}
          id="userId"
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.userId && <p className="mt-1 text-sm text-red-500">{errors.userId.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="referralCode" className="block mb-2 text-sm font-medium text-gray-700">
          Referral Code (Optional)
        </label>
        <input
          {...register('referralCode')}
          id="referralCode"
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}

export default ReferralForm;