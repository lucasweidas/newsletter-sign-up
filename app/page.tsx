import { SignUpForm } from '@/components/signUpForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
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
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}

function SuccessMessage() {
  return (
    <div>
      <Image src="/images/icon-success.svg" alt="" width={64} height={64} aria-hidden="true" />
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
      <button>Dismiss message</button>
    </div>
  );
}
