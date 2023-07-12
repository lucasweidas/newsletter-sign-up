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
          <form action="">
            <div className="flex flex-col gap-6">
              <div className="mt-10 grid gap-3 md:grid-cols-2">
                <label className="text-sm font-bold text-gray-800" htmlFor="email">
                  Email address
                </label>
                {/* <span className="row-start-3 text-sm font-bold text-red-400 md:row-auto md:justify-self-end">Valid email required</span> */}
                <input
                  className="w-full rounded-md px-6 py-4 text-gray-800 ring-1 ring-gray-400 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 md:col-span-2"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email@company.com"
                />
              </div>
              <button
                className="relative isolate overflow-hidden rounded-lg bg-gray-800 p-5 font-bold text-white transition-[background-color_shadow] duration-200 before:absolute before:left-0 before:top-0 before:-z-[1] before:h-full before:w-full before:bg-linear-gradient-red-1 before:opacity-0 before:transition-opacity before:duration-200 hover:bg-transparent hover:shadow-xl hover:shadow-red-400/30 hover:before:opacity-100"
                type="submit"
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </form>
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
