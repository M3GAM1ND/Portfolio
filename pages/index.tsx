import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>M3GAM1ND</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="intro">
        <div>
          <h1>
            HEY I AM {""}
            <span>VAIBHAV SINGH</span>
          </h1>
          <h1>BUT YOU CAN CALL ME M3GAM1ND</h1>
        </div>
        <div>
          <h4>I am a Student </h4>
          <h4>and a Novice Web Developer</h4>
        </div>
        <div>
          <Link className="link introLink" href="/projects">
            Projects
          </Link>
          <Link className="link introLink" href="/about">
            About
          </Link>
        </div>
      </div>
    </>
  );
}
