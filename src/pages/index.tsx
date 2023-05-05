import { poppinsFont } from '@/lib/next-fonts';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={`${poppinsFont.variable}`}>
      <Head>
        <title>Syahda Romansyah</title>
        <link
          rel="icon"
          href="https://storage.googleapis.com/dicoding-mgce-first-project-bucket-1/assets/next-assets/favicon.ico"
          type="image/x-icon"
        />
      </Head>

      <div className="w-full bg-hero-patern lg:h-screen">
        <div className="w-full lg:flex lg:h-full lg:items-center lg:justify-center">
          <div className="container mx-auto px-4 pb-6 pt-12">
            <div className="max-w-[1128px] lg:mx-auto lg:flex lg:gap-x-12">
              <div className="mb-4">
                <Image
                  className="mx-auto w-[172px] rounded-full lg:w-[312px]"
                  src="https://storage.googleapis.com/dicoding-mgce-first-project-bucket-1/assets/images/profile-img.webp"
                  alt="Syahda Romansyah profile image"
                  width={512}
                  height={512}
                />
              </div>

              <div className="lg:flex-1">
                <main className="mb-8">
                  <div className="mb-6 text-center lg:text-left">
                    <h1 className="mb-2 font-poppins text-2xl font-extrabold lg:text-4xl">
                      Hi folks! I&apos;m Syahda Romansyah
                    </h1>

                    <p className="mb-2 font-medium lg:text-2xl">
                      A learner person and Software Engineer in Web Development
                      field focuses on Front-End Web Developer role.
                    </p>

                    <p className="font-poppins text-lg font-semibold text-zinc-600">
                      Based on Bandung, Indonesia.
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="mx-auto mb-4 max-w-max rounded bg-zinc-800 px-3 py-1 font-poppins text-zinc-100 lg:mx-0">
                      Reach me via
                    </h4>

                    <ul className="mx-auto grid w-[128px] gap-y-2 md:w-[412px] md:grid-cols-3 md:gap-x-2 md:gap-y-0 lg:mx-0">
                      <li>
                        <a
                          className="inline-block w-full rounded bg-zinc-300 px-4 py-2 font-semibold text-zinc-600 shadow-inner transition-colors hover:bg-zinc-400"
                          href="https://www.github.com/syahdaromansyah"
                        >
                          Github
                        </a>
                      </li>

                      <li>
                        <a
                          className="inline-block w-full rounded bg-zinc-300 px-4 py-2 font-semibold text-zinc-600 shadow-inner transition-colors hover:bg-zinc-400"
                          href="https://www.linkedin.com/in/syahda-romansyah-b66b24270/"
                        >
                          LinkedIn
                        </a>
                      </li>

                      <li>
                        <a
                          className="inline-block w-full rounded bg-zinc-300 px-4 py-2 font-semibold text-zinc-600 shadow-inner transition-colors hover:bg-zinc-400"
                          href="https://www.twitter.com/syahdarom"
                        >
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </main>

                <footer className="grid gap-y-1 text-center text-xs lg:text-left lg:text-base">
                  <p>
                    Build with{' '}
                    <a
                      className="font-semibold underline"
                      href="https://nextjs.org/"
                    >
                      Next
                    </a>
                    ,{' '}
                    <a
                      className="font-semibold underline"
                      href="https://tailwindcss.com/"
                    >
                      Tailwind CSS
                    </a>
                    , and hosted on{' '}
                    <a
                      className="font-semibold underline"
                      href="https://cloud.google.com/appengine"
                    >
                      Google Cloud App Engine.
                    </a>
                  </p>

                  <p>
                    &copy; Copyright {new Date().getFullYear()} Syahda
                    Romansyah.
                  </p>

                  <p>All right reserved.</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
