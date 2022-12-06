import Image from "next/image";

import { useRouter } from "next/router";
import { getTexts } from "./../../../services/getTexts.js";

import { FilledButton } from "../../utils/FilledButton";

import flag from "./../../../assets/images/Ukraine.webp";

export const HomeFront = () => {
  const { locale } = useRouter();
  const { data:dataFrom100 } = getTexts(locale,100);
  const { data, loading, error } = getTexts(locale);

  if (loading) return <span></span>;
  if (error) return <span></span>;

  return (
    <>
      <section
        className="home-front-section min-h-[calc(110vh-5rem)] flex justify-center items-center mb-[47px]  bg-cover bg-center bg-no-repeat
      2xl:px-8 px-8 pb-8 tablets:pb-0"
      >
        <div
          className="flex justify-between gap-3 lg:gap-6 flex-col tablets:flex-row  
      w-full tablets:w-auto md:mt-[20px] lg:mt-[-110px]"
        >
          <div
            className="lg:max-w-[340px] max-w-full 2xl:max-w-[540px] flex
        flex-col gap-6 md:gap-8 lg:-mt-8 mt-12 tablets:-mt-[1.7rem]"
          >
            <h2
              className="font-proximaNova300 text-[34px] md:text-[35px]  lg:text-[38px]
          leading-[40px] md:leading-[65px] first-letter:tracking-wide"
            >
              {data["home-evening"]}
              <br />
              <span className='font-proximaNova500 text-blue-500 text-[43px] md:text-[44px] lg:text-[48px]
            '>
                {data["home-upper-title-blue"]}
              </span>{" "}
              <span className='font-proximaNova500 text-yellow-300 text-[43px] md:text-[44px] lg:text-[48px]
           '>
                {data["home-upper-title-yellow"]}
              </span>
            </h2>

            <p className="font-proximaNova300 text-xl md:text-2xl">
              {data["home-upper-introduction"]}
            </p>

            <div className="flex justify-end items-center gap-6 md:gap-8">
              <div>
                <hr
                  className="border border-solid border-gray-900 max-w-[92px]
                w-[92px]"
                />
              </div>

              <FilledButton
                href="/info/1"
                text={data["home-upper-next"]}
                textColor="gray-100"
                bgColor="bg-[#006DB6]"
              />
            </div>
          </div>

          <div
            className=" flex flex-col justify-center items-center"
          >
            <div className=" object-cover"> 
            <Image
              src={flag}
              alt="flag"
              width={454}
              height={398.34}
              priority
              
            />
             </div> 
            <div className=" tablets-m:mx-[10px] text-center">
            <span className='font-proximaNova500 text-blue-500 text-[39px] 2xl:text-[36px] xl:text-[22px] md:text-[18px] smallest-phones:text-[16px] lg:text-[21px] tablets-m:text-[11px]
            '>
           {dataFrom100["logo-ukrainian-first"]}
            </span>    
            <br/>  
            <span className='font-proximaNova500 text-blue-500 text-[43px] text-center 2xl:text-[47px] xl:text-[29px] md:text-[24px] smallest-phones:text-[21px]  lg:text-[27px] tablets-m:text-[15px]
            '>
           {dataFrom100["logo-ukrainian-second"]}
            </span>   
            </div>  
          </div>

          <div
            className=" md:max-w-[120%] xl:max-w-[500px] max-w-full 2xl:max-w-[540px] w-full
        hidden md:flex flex-col gap-8 mt-0 md:mt-[6.4rem]"
          >
            <div className="flex justify-start items-center gap-6 md:gap-8">
              <FilledButton
                href="/how"
                text={data["home-bottom-next"]}
                textColor="gray-100"
                bgColor="bg-yellow-300"
              />
              <div>
                <hr
                  className="border border-solid border-gray-900 max-w-[92px]
                w-[92px]"
                />
              </div>
            </div>
            <p className="font-proximaNova300 text-2xl">
              {data["home-bottom-introduction"]}
            </p>

            <h2
              className="font-proximaNova300 uppercase text-[41px] leading-[65px] xl:leading-[64px] md:leading-[46px]
              tracking-wide  md:text-[25px] lg:text-[32px] xl:text-[34px]"
            >
              {data["home-bottom-subtitle"]}
              <br />
              <span
                className="font-proximaNova500 text-blue-500 text-[62.81px] 2xl:text-[62.81px] xl:text-[59px] lg:text-[55px] md:text-[40px]
                uppercase"
              >
                {data["home-bottom-title-bold"]}
              </span>{" "}
              <span
                className="font-proximaNova500 text-gray-900 text-[62.81px]  2xl:text-[62.81px] xl:text-[59px] lg:text-[55px] md:text-[40px]
            uppercase"
              >
                {data["home-bottom-title"]}
              </span>{" "}
              <span
                className="font-proximaNova500 text-yellow-300 text-[62.81px]  2xl:text-[62.81px] xl:text-[59px] lg:text-[55px] md:text-[40px]
                uppercase"
              >
                {data["home-help"]}
              </span>
            </h2>
          </div>

          <div
            className="max-w-full flex md:hidden flex-col gap-6 mt-2
            tablets:mt-20"
          >
            <h2
              className="font-proximaNova300 text-[23px] uppercase
          leading-[24px] tracking-wider"
            >
              {data["home-bottom-subtitle"]}
              <br />
              <span
                className="font-proximaNova500 text-blue-500 text-[35px]
                md:text-[62.81px] uppercase"
              >
                {data["home-bottom-title-bold"]}
              </span>{" "}
              <span
                className="font-proximaNova500 text-blue-900 text-[35px]
                md:text-[62.81px] uppercase"
              >
                {data["home-bottom-title"]}
              </span>{" "}
              <span
                className="font-proximaNova500 text-yellow-300 text-[35px]
                md:text-[62.81px] uppercase"
              >
                {data["home-help"]}
              </span>
            </h2>

            <p className="font-proximaNova300 text-[19px] leading-[30px] tracking-wider">
              {data["home-bottom-introduction"]}
            </p>

            <div className="flex justify-end items-center gap-6 md:gap-8">
              <div>
                <hr
                  className="border border-solid border-gray-900 max-w-[92px]
                  w-[92px]"
                />
              </div>
              <FilledButton
                href="/how"
                text={data["home-bottom-next"]}
                textColor="gray-100"
                bgColor="bg-yellow-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
