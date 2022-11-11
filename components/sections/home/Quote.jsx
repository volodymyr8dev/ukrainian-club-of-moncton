import Image from "next/image";

import quoteImage from "./../../../assets/images/quote.svg";
import { useRouter } from "next/router";
import { getTexts } from "./../../../services/getTexts.js";

export const Quote = () => {
  const { locale } = useRouter();
  const { data, loading, error } = getTexts(locale);

  if (loading) return <span></span>;
  if (error) return <span></span>;

  return (
    <section className="flex justify-center mb-12 mt-0 md:mt-36 px-6 xl:px-0">
      <div className="flex justify-center flex-col max-w-[1216px] w-full">
        <div
          className="flex flex-col justify-center rounded-3xl overflow-visible
      shadow-[0px_2px_32px_rgba(0,32,73,0.13)] px-4 md:px-9"
        >
          <div className="flex justify-center -translate-y-12 z-5">
            <Image src={quoteImage} alt="quote" />
          </div>

          <div className="-mt-5 pb-10">
            <p
              className="text-left md:text-center font-proximaNova300 text-base md:text-lg
          leading-4"
            >
              <span className="max-w-2xl w-full inline-block">
                {data[58].textContent}
                <br />
                {data[59].textContent}
              </span>
              <br />
              <br />
              {data[60].textContent}
              <br />
              <br />
              <span className="max-w-2xl w-full inline-block">
                {data[61].textContent}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
