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
            <ul className="flex flex-col gap-3 mt-5">
              <li className="flex gap-4 items-start text-gray-700">
                <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
                Product discovery and building what matters
              </li>
              <li className="flex gap-4 items-start text-gray-700">
                <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
                Measuring to ensure updates are a success
              </li>
              <li className="flex gap-4 items-start text-gray-700">
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
                {/* <span className="text-red-400 text-sm font-bold row-start-3 md:row-auto md:justify-self-end">Valid email required</span> */}
                <input
                  className="ring-1 ring-gray-400 rounded-md px-6 py-4 focus-visible:outline-none focus-visible:ring-gray-800 focus-visible:ring-2 placeholder:text-gray-400 text-gray-800 w-full md:col-span-2"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email@company.com"
                />
              </div>
              <button
                className="bg-gray-800 font-bold text-white p-5 rounded-lg relative isolate before:absolute before:w-full before:h-full before:bg-linear-gradient-red-1 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 before:-z-[1] before:top-0 before:left-0 overflow-hidden transition-[background-color_shadow] duration-200 hover:bg-transparent hover:shadow-xl hover:shadow-red-400/30"
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
