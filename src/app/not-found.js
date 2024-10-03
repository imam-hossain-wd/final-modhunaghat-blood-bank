'use client'

import { Button } from '@/components/ui/button';
import { homeAssets } from '@/utils/assets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// Adjust the import based on your component structure

const NotFoundPage = () => {
  const router = useRouter();

  const {notfound}= homeAssets;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-pink-300 text-center">
       <Image
        src={notfound}// Replace with the actual path to your SVG file
        alt="Not Found"
        width={400} // Set the desired width
        height={250} // Set the desired height
        className="" // You can adjust the margin as needed
      />
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-1 text-xl text-white">
        Oops! The page you are looking for does not exist.
      </p>
      <Button
        onClick={() => router.push('/')}
        className=" px-6 py-2 text-white my-6 font-semibold transition"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
