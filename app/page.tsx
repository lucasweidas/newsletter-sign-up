'use client';
import Image from 'next/image';
import { useState } from 'react';
import { SignUpForm } from '@/components/signUpForm';
import { FormData, SignUpFormProps, SuccessMessageProps } from '@/interfaces';

export default function Home() {
  const [formData, setFormData] = useState<FormData | null>(null);

  return <main>{formData ? <SuccessMessage email={formData.email} setFormData={setFormData} /> : <SignUpCard setFormData={setFormData} />}</main>;
}

function SignUpCard({ setFormData }: SignUpFormProps) {
  return (
    <div className="flex flex-col">
      <div>
        <Image src="/images/illustration-sign-up-mobile.svg" alt="" width={375} height={284} className="w-full" aria-hidden="true" priority />
      </div>
      <div className="px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-800">Stay updated!</h1>
        <div className="mt-5">
          <p className="text-gray-700">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="mt-5 flex flex-col gap-3">
            <li className="flex items-start gap-4 text-gray-700">
              <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
              Product discovery and building what matters
            </li>
            <li className="flex items-start gap-4 text-gray-700">
              <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
              Measuring to ensure updates are a success
            </li>
            <li className="flex items-start gap-4 text-gray-700">
              <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
              And much more!
            </li>
          </ul>
        </div>
        <SignUpForm setFormData={setFormData} />
      </div>
    </div>
  );
}

function SuccessMessage({ email, setFormData }: SuccessMessageProps) {
  function handleClick() {
    setFormData(null);
  }

  return (
    <div className="flex min-h-screen flex-col px-6 pb-10 pt-36">
      <Image src="/images/icon-success.svg" alt="" width={64} height={64} aria-hidden="true" />
      <h1 className="mt-10 text-4xl font-bold text-gray-800">Thanks for subscribing!</h1>
      <p className="text-800 mt-6">
        A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click the button inside to confirm your
        subscription.
      </p>
      <button
        className="relative isolate mt-auto overflow-hidden rounded-lg bg-gray-800 p-5 font-bold text-white outline-none transition-[background-color_shadow] duration-200 before:absolute before:left-0 before:top-0 before:-z-[1] before:h-full before:w-full before:bg-linear-gradient-red-1 before:opacity-0 before:transition-opacity before:duration-200 hover:bg-transparent hover:shadow-xl hover:shadow-red-400/30 hover:before:opacity-100 focus-visible:bg-transparent focus-visible:shadow-xl focus-visible:shadow-red-400/30 focus-visible:before:opacity-100"
        onClick={handleClick}
      >
        Dismiss message
      </button>
    </div>
  );
}
