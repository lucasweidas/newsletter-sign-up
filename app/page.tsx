'use client';
import Image from 'next/image';
import { useState } from 'react';
import { SignUpForm } from '@/components/signUpForm';
import { FormData, SignUpFormProps, SuccessMessageProps } from '@/interfaces';

export default function Home() {
  const [formData, setFormData] = useState<FormData | null>(null);

  return (
    <main className="md:flex md:min-h-screen md:w-full md:items-center md:justify-center md:py-16">
      {formData ? <SuccessMessage email={formData.email} setFormData={setFormData} /> : <SignUpCard setFormData={setFormData} />}
    </main>
  );
}

function SignUpCard({ setFormData }: SignUpFormProps) {
  return (
    <div className="flex flex-col md:max-w-[52rem] md:flex-row-reverse md:gap-8 md:rounded-3xl md:bg-white md:py-4 md:pl-8 md:pr-4 lg:max-w-[58rem] lg:gap-16 lg:rounded-4xl lg:py-6 lg:pl-16 lg:pr-6">
      <picture>
        <source media="(min-width: 768px)" type="image/svg+xml" srcSet="/images/illustration-sign-up-desktop.svg" />
        <img
          className="w-full object-left-top xsm:max-md:max-h-[26rem] xsm:max-md:rounded-b-[5%] xsm:max-md:object-cover"
          src="/images/illustration-sign-up-mobile.svg"
          alt=""
        />
      </picture>
      <div className="max-md:px-6 max-md:py-10 md:flex md:flex-col md:justify-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-5.5xl">Stay updated!</h1>
        <div className="mt-5">
          <p className="text-gray-800">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="mt-6 flex flex-col gap-3">
            <li className="flex items-start gap-4 text-gray-800">
              <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
              Product discovery and building what matters
            </li>
            <li className="flex items-start gap-4 text-gray-800">
              <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
              Measuring to ensure updates are a success
            </li>
            <li className="flex items-start gap-4 text-gray-800">
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
    <div className="flex min-h-screen flex-col px-6 pb-10 pt-36 md:min-h-0 md:max-w-lg md:rounded-3xl md:bg-white md:p-16 lg:rounded-4xl">
      <Image src="/images/icon-success.svg" alt="" width={64} height={64} aria-hidden="true" />
      <h1 className="mt-10 text-4xl font-bold text-gray-800 md:text-5xl lg:text-5.5xl">Thanks for subscribing!</h1>
      <p className="mt-6 text-gray-800">
        A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click the button inside to confirm your
        subscription.
      </p>
      <button
        className="relative isolate mt-auto overflow-hidden rounded-lg bg-gray-800 p-5 font-bold text-white outline-none transition-[background-color_shadow] duration-200 before:absolute before:left-0 before:top-0 before:-z-[1] before:h-full before:w-full before:bg-linear-gradient-red-1 before:opacity-0 before:transition-opacity before:duration-200 hover:bg-transparent hover:shadow-xl hover:shadow-red-400/30 hover:before:opacity-100 focus-visible:bg-transparent focus-visible:shadow-xl focus-visible:shadow-red-400/30 focus-visible:before:opacity-100 md:mt-11"
        onClick={handleClick}
      >
        Dismiss message
      </button>
    </div>
  );
}
