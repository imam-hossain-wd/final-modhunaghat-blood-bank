"use client";

import { Card } from "@/components/ui/card";

import Image from "next/image";

const donors = [
  {
    donor_id: 1,
    name: "John Doe",
    phone_number: "+1234567890",
    email: "john.doe@example.com",
    age: 30,
    blood_group:"O+",
    weight: 75,
    last_donation_date: "2024-06-15",
    is_available: true,
    image: "/images/john-doe.jpg", // Add image path
    amount: "$500", // Add amount if needed
  },
  {
    donor_id: 2,
    name: "Jane Smith",
    phone_number: "+0987654321",
    email: "jane.smith@example.com",
    age: 28,
    weight: 65,
    blood_group:"O+",
    last_donation_date: "2024-05-20",
    is_available: false,
    image: "/images/jane-smith.jpg", // Add image path
    amount: "$300", // Add amount if needed
  },
  {
    donor_id: 3,
    name: "Alice Johnson",
    phone_number: "+1122334455",
    email: "alice.johnson@example.com",
    age: 35,
    weight: 68,
    blood_group:"O+",
    last_donation_date: "2024-07-10",
    is_available: true,
    image: "/images/alice-johnson.jpg", // Add image path
    amount: "$200", // Add amount if needed
  },
  {
    donor_id: 4,
    name: "Bob Brown",
    phone_number: "+2233445566",
    email: "bob.brown@example.com",
    age: 40,
    weight: 80,
    last_donation_date: "2024-04-25",
    blood_group:"O+",
    is_available: true,
    image: "/images/bob-brown.jpg", // Add image path
    amount: "$400", // Add amount if needed
  },
  {
    donor_id: 5,
    name: "Charlie Davis",
    phone_number: "+3344556677",
    email: "charlie.davis@example.com",
    age: 29,
    weight: 70,
    blood_group:"O+",
    last_donation_date: "2024-08-05",
    is_available: false,
    image: "/images/charlie-davis.jpg", // Add image path
    amount: "$350", // Add amount if needed
  },
];





const BloodDonor = () => {

  return (
    <div  className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-[90%] mx-auto">
      {donors?.map((donor, index) => (
        <Card key={index} className="p-3">
          <div className="mx-auto w-40 h-40 rounded-full border p-2">
            <Image
              src="https://img.freepik.com/premium-photo/man-with-glasses-blue-shirt-that-says-he-is-smiling_1132399-5341.jpg?uid=R152685630&ga=GA1.1.1512880784.1715701845&semt=ais_hybrid"
              alt={donor.name}
            width={500}
            height={500}
              className="w-40 h-32"
            />
          </div>
          <div className="p-2">
            <h3 className="text-xl font-semibold mb-2">{donor.name}</h3>
            <p className="text-gray-700 mb-4">Donated: {donor.blood_group}</p>
            <p className="text-gray-700 mb-4">Donated: {donor.last_donation_date}</p>
            <p className="text-gray-700 mb-4">Donated: {donor.is_available}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BloodDonor;