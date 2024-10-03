import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="text-center py-12 bg-primary text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Dedicated to Saving Lives with Every Drop
        </p>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto py-12 px-6 md:px-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          At Modhunaghat Blood Bank, we are committed to providing safe,
          reliable, and accessible blood donation services. We believe in the
          power of community and are dedicated to saving lives with every
          donation.
        </p>
      </section>

      {/* Story Section */}
      <section className="container mx-auto py-12 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg">
          Established in 2023, Modhunaghat Blood Bank was born out of the need
          for a more accessible blood donation service in our community. Over
          the years, we have grown and evolved, continuing to support and save
          lives with every drop.
        </p>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto py-12 px-6 md:px-12">
        <h2 className="text-3xl font-semibold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-red-500">1000+</h3>
            <p className="mt-2">Lives Saved</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-red-500">500+</h3>
            <p className="mt-2">Active Donors</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-red-500">150+</h3>
            <p className="mt-2">Blood Drives Hosted</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto py-12 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example team member */}
          <div className="text-center">
            <Image
            width={500} height={500}
              src="/images/team1.jpg"
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-sm">Founder & CEO</p>
          </div>
          {/* Repeat for other team members */}
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="container mx-auto py-12 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">How to Get Involved</h2>
        <p className="text-lg mb-6">
          Become a part of our life-saving mission. Donate blood, volunteer, or
          support our efforts financially.
        </p>
        <Button className="bg-red-500 text-white px-6 py-3">
          Become a Donor
        </Button>
      </section>
    </div>
  );
};

export default AboutPage;
