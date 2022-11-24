import Image from "next/image";

import doubtIdeaImage from "./../../../assets/images/volonter_products.webp";
import ladderImage from "./../../../assets/images/facebook_sharing.webp";
import arrow from '../../../assets/images/Vector.svg'

import { useRouter } from "next/router";
import { getTexts } from "./../../../services/getTexts.js";
import { DonateButton } from "../../utils/DonateButton";

export const ClubQuestions = () => {
  const { locale } = useRouter();
  const { data, loading, error } = getTexts(locale);

  if (loading) return <span></span>;
  if (error) return <span></span>;

  return (
    <>
      <section className="flex justify-center mb-[72px] md:mb-28 px-6 xl:px-0">
        <div className="flex justify-center flex-col max-w-[1216px] w-full">
          <h2
            className=" font-proximaNova500 text-4xl md:text-[48px] lg:text-[56px] uppercase w-full 
        leading-[54px] xl:leading-10 tracking-wider pb-0 md:pb-11 xl:pb-36 text-left 
        xl:text-center"
          >
            {data["home-assosiation"]}{"  "}
          </h2>
          <div
            className=" w-full flex flex-col-reverse md:flex-row items-center
        justify-between md:justify-center xl:justify-start gap-0 xl:gap-[80px] px-5"
          >
            <div className="pr-[20px] md:w-1/2 lg:mt-[-50px] ">
              <strong
                className="font-proximaNova400 text-[26px] md:text-3xl lg:text-4xl
                 uppercase"
              >
                {data["home-are-you"]}{"  "}
                <span className="text-blue-500 ">
                  {data["home-going-to"]}{"  "}
                </span>
                {data["home-canada-question"]}
              </strong>
              <div className="flex text-xl  font-proximaNova300 mt-[32px]">
              {data["home-immigration"]}
              </div>
              <div className='tablets:w-[355px] sm:w-[349px] mt-[32px]'>  
              <DonateButton  text={data['go-to-shop']} img={arrow}  />
            </div>
            </div>
            <div className="md:w-[400px] lg:w-[562px] w-1/2">
              <Image
                src={doubtIdeaImage}
                alt="Woman in doubt"
                width={562}
                height={400}
              />
            </div>
          </div>

          <div
            className="flex items-center justify-between flex-col
        md:flex-row xl:justify-between gap-0 xl:gap-28 pt-20"
          >
            <div className="pb-12 md:pb-0 w-1/2">
              <Image
                src={ladderImage}
                alt="ladder climbing"
                width={400}
                height={400}
              />
            </div>
            <div className=" md:w-1/2">
              <strong
                className="font-proximaNova400 text-[26px] md:text-4xl pl-[10px]
            uppercase"
              >
                <span className="text-500 md:text-[30px] lg:text-[36px]">
                  {data["home-already"]} {" "}
                </span>
                <span className="text-blue-500 md:text-[30px] lg:text-[36px]">
                  {data["home-shop-us"]}{" "}
                </span>
                <span className=" md:text-[30px] lg:text-[36px]"> 
                {data["home-in-canada"]}{" "}
                </span>
              </strong>
              <div className="pl-2 md:pl-4 pt-6 md:pt-10  font-proximaNova300 text-xl
                  md:text-[24px] leading-9">  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </div>
              <div className='md:w-[289px] mobile-l:w-[280px] mt-[32px]'>  
              <DonateButton link="/" img={arrow} text={data['go-to-our-group']} />
            </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
