import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import {useState} from 'react'
import { useRouter } from 'next/router'
import { getTexts } from './../../../services/getTexts.js'
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import { useRouter } from "next/router";
import { getTexts } from "./../../../services/getTexts.js";

import { gql, useQuery } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/autoplay";

import FsLightbox from 'fslightbox-react';


import locationImage from "./../../../assets/images/card-location.svg";

import { HeadingToggler } from "../../utils/HeadingToggler";

const GET_MOST_RECENT_POSTS_QUERY = gql`
  query getRecentPosts {
    posts(
      where: { category: { slug: "event" } }
      orderBy: createdAt_DESC
      last: 10
    ) {
      title
      tags {
        name
        slug
      }
      excerpt
      featuredImage {
        url
      }
      address
      slug
      createdAt
      localizations(locales: uk_UA) {
        title
        excerpt
        address
        tags {
          name
        }
      }
    }
  }
`;

export const UpcomingEvents = () => {
  const { locale } = useRouter();
  const { loading, error, data } = useQuery(GET_MOST_RECENT_POSTS_QUERY);

  const [toggler, setToggler] = useState(false);


  const { data: dataT, loading: loadingT, error: errorT } = getTexts(locale);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (loadingT) return <span></span>;
  if (errorT) return <span></span>;

  return (
    <>
      <section className="flex justify-center mb-16 md:mb-28 pl-6 md:px-6 xl:px-0">
        <div className="flex justify-center flex-col max-w-[1260px] w-full">
          <HeadingToggler
            heading={dataT[56].textContent}
            togglerPrevClass="event-prev"
            togglerNextClass="event-next"
          />

          <div
            className="flex justify-between gap-2 xl:gap-0 -ml-[23px] md:ml-0
          -mt-14"
          >
            <Swiper
              className="home-events-swiper h-full"
              breakpoints={{
                100: {
                  slidesPerView: "auto",
                  spaceBetween: 8,
                },
                700: {
                  spaceBetween: 8,
                },
                800: {
                  spaceBetween: 30,
                },
                1030: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  spaceBetween: 60,
                },
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".event-prev",
                nextEl: ".event-next",
              }}
              modules={[Navigation, Pagination]}
            >
                  <FsLightbox
                toggler={ toggler }
                sources={ data.posts.map((post)=>post.featuredImage.url)}
              />
            {data.posts.map((post) => (
                <SwiperSlide key={post.title} className="py-10">
                  <div
                    className="shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                w-full max-h-full h-full
                overflow-hidden bg-gray-100 rounded-3xl mt-6
                flex flex-col justify-start"
                  >
                    <div onClick={()=>{setToggler(true)}} className="w-full flex flex-col">
                      <img
                        className="w-full min-h-[200px] md:min-h-[256px]
                      object-cover max-h-[200px] md:max-h-[256px]"
                        src={post.featuredImage.url}
                        alt={
                          locale == "ua"
                            ? post?.localizations[0]?.title
                            : post.title
                        }
                        title={
                          locale == "ua"
                            ? post.localizations[0]?.title
                            : post.title
                        }
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="px-4 lg:px-6 pt-6 flex flex-col justify-between
                  h-full"
                    >
                      <div>
                        <div>
                          <span
                            className={`font-proximaNova200 text-yellow-900
                        px-6 py-2 rounded-[20px] ${
                          post.tags[0]?.name ? "bg-yellow-100" : "bg-none"
                        }`}
                          >
                            {locale == "ua"
                              ? post.localizations[0]?.tags[0]?.name
                              : post.tags[0]?.name}
                          </span>
                        </div>

                        <div className="pt-8">
                          <h6
                            className="font-proximaNova500 uppercase text-xl
                        md:text-2xl"
                          >
                            {locale == "ua"
                              ? post?.localizations[0]?.title
                              : post.title}
                          </h6>
                          <p
                            className="pr-4 md:pr-0 font-proximaNova200
                        text-base md:text-lg pt-2 leading-[18px]"
                          >
                            {locale == "ua"
                              ? post?.localizations[0]?.excerpt
                              : post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div
                          className="w-full md:w-auto flex justify-between
                      items-center pt-10 pb-6"
                        >
                          <span
                            className="font-proximaNova200 text-base
                       text-gray-500 md:text-lg leading-[18px]"
                          >
                            {moment(post.createdAt).format("MMM DD, YYYY")}
                          </span>

                          <Link href={`/posts/${post.slug}`}>
                            <span
                              className="bg-yellow-500 text-gray-100
                          py-3 px-4 lg:px-10 rounded-[64px]
                          font-proximaNova400 text-base md:text-lg
                          text-center cursor-pointer"
                            >
                              {locale == "ua" ? "Читати далі" : "Read more"}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
