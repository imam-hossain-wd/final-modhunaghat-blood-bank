"use client";

import { Button } from "@/components/ui/button";
import { homeAssets } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  const { homebanner } = homeAssets;
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center space-y-4 lg:space-y-0 lg:space-x-8 p-8 bg-gray-50  mb-5">
        <div className="text-2xl lg:text-4xl font-bold text-primary text-center lg:text-left -mt-">
          <h2 className="typewriter">Donate Blood, Save Lives</h2>
          <h2>Be A Hero Today</h2>
          <p className="text-lg text-gray-700 mt-4">
            Join our mission to help those in need. Your donation can save
            lives!
          </p>

          <div className="flex text-lg ml-5 lg:ml-0 mt-5 items-center">
            <Button className="font-bold">
              <Link href="/donor/register">Be a Donor</Link>
            </Button>
            <Button className="ml-5 font-bold">Find Donor</Button>
            <Button className="ml-5 font-bold">Blood Request</Button>
          </div>
        </div>
        <Image
          src={homebanner}
          width={500}
          height={300}
          alt="blood donate home banner"
          className="w-80 lg:w-96 lg:h-auto h-72"
        />
      </div>

      <style jsx>{`
        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          letter-spacing: 0.15em;
          animation: typing 3.5s steps(40, end);
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;