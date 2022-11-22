import Head from "next/head";
import { HomeFront } from "../components/sections/home/HomeFront";
import { BottomCTA } from "../components/sections/home/BottomCTA";
import { ClubAbout } from "../components/sections/home/ClubAbout";
import { ClubQuestions } from "../components/sections/home/ClubQuestions";
import { Quote } from "../components/sections/home/Quote";
import { UpcomingEvents } from "../components/sections/home/UpcomingEvents";
import { ThankYouModal } from "../components/utils/ThankYouModal";

import { useRouter } from "next/router";
import { getTexts } from "./../services/getTexts.js";

export default function Home() {
  const { locale } = useRouter();
  const { data, loading, error } = getTexts(locale);

  if (loading) return <span></span>;
  if (error) return <span></span>;

  return (
    <>
      <Head>
        <title>Home - Ukrainian Club of Moncton</title>
                          {/* equal data */}
        <meta name="description" content={data["how-tag-seo"]} /> 
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
      
    <main id='main' className='relativee'>
      <HomeFront />
      <ClubQuestions/>
      <div className="upcoming_section"> 
      <UpcomingEvents />
      <ClubAbout />
      <Quote />
      <BottomCTA />
      </div>
    </main>
    <ThankYouModal />
    </>
  );
}
