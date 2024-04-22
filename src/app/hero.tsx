"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";

function Hero() {

  const [hero1, setHero1] = useState("");
  const [heroP1, setHeroP1] = useState("");

  useEffect(() => {

    axios.get("http://localhost:4000/api/v1/data-packets/fetch/a2f3a8df-c132-4561-8ba9-f088003f57bb/home/hero-1").then((response) => {
      setHero1(response.data);
    });

    axios.get("http://localhost:4000/api/v1/data-packets/fetch/a2f3a8df-c132-4561-8ba9-f088003f57bb/home/hero-hero-pragraph").then((response) => {
      setHeroP1(response.data);
    });

  }, []);

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            {hero1}
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            {heroP1}
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
