import Image from "next/image";

import doubtIdeaImage from "./../../../assets/images/doubt-idea.svg";
import ladderImage from "./../../../assets/images/ladder.svg";

import { useRouter } from "next/router";
import { getTexts } from "./../../../services/getTexts.js";

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
            className="font-proximaNova500 text-4xl md:text-[56px] uppercase w-full 
        leading-[54px] xl:leading-10 tracking-wider pb-0 md:pb-11 xl:pb-36 text-left
        xl:text-center"
          >
            {data["home-assosiation"]}
          </h2>
          <div
            className="flex flex-col-reverse md:flex-row items-center
        justify-between xl:justify-start gap-0 xl:gap-[70px]"
          >
            <div>
              <strong
                className="font-proximaNova400 text-[26px] md:text-4xl
            uppercase"
              >
                {data["home-are-you"]}{" "}
                <span className="text-blue-500">
                  {data["home-going-to"]}
                </span>
                {data["home-canada-question"]}
              </strong>
              <ul className="pl-2 md:pl-4 pt-6 md:pt-10">
                <li
                  className="list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9"
                >
                  {data["home-immigration"]}
                </li>
                <li
                  className="list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9"
                >
                  {data["home-visa"]}
                </li>
                <li
                  className="list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9"
                >
                  {data["home-transfer-airport"]}
                </li>
              </ul>
            </div>
            <div>
              <Image
                src={doubtIdeaImage}
                alt="Woman in doubt"
                width={400}
                height={400}
              />
            </div>
          </div>

          <div
            className="flex items-center justify-between flex-col
        md:flex-row xl:justify-end gap-0 xl:gap-28 pt-20"
          >
            <div className="pb-12 md:pb-0">
              <Image
                src={ladderImage}
                alt="ladder climbing"
                width={400}
                height={400}
              />
            </div>
            <div>
              <strong
                className="font-proximaNova400 text-[26px] md:text-4xl
            uppercase"
              >
                <span className="text-yellow-300">
                  {data["home-already"]}
                </span>
                {data["home-in-canada"]}
              </strong>
              <ul className="pl-2 md:pl-4 pt-6 md:pt-10">
                <li
                  className="list-disc list-inside font-proximaNova300 text-xl
                  md:text-2xl leading-9"
                >
                  {data["home-first-step"]}
                </li>
                <li
                  className="list-disc list-inside font-proximaNova300 text-xl
                  md:text-2xl leading-9"
                >
                  {data["home-sin"]}
                </li>
                <li
                  className="list-disc list-inside font-proximaNova300 text-xl
                  md:text-2xl leading-9"
                  >
                  {data["home-medicare"]}
                </li>
                <li
                  className="list-disc list-inside font-proximaNova300 text-xl
                  md:text-2xl leading-9"
                  >
                  {data["home-ancillary"]}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
