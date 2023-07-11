import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <h1>Stay updated!</h1>
          <div>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
                Product discovery and building what matters
              </li>
              <li>
                <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
                Measuring to ensure updates are a success
              </li>
              <li>
                <Image src="/images/icon-list.svg" alt="" width={21} height={21} aria-hidden="true" />
                And much more!
              </li>
            </ul>
          </div>
          <form action="">
            <div>
              <label htmlFor="email">Email address</label>
              <span>Valid email required</span>
              <input type="text" name="email" id="email" placeholder="email@company.com" />
            </div>
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div>
          <Image src="/images/illustration-sign-up-mobile.svg" alt="" width={375} height={284} aria-hidden="true" />
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
