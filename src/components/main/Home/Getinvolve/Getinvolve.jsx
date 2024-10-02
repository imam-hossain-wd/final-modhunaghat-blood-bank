import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const involvementOptions = [
    {
      title: "Volunteer",
      description: "Join our team of volunteers and help us make a difference.",
      image: "https://img.freepik.com/free-photo/environment-volunteer-teamwork-concept_23-2147807229.jpg?uid=R152685630&ga=GA1.1.1512880784.1715701845&semt=ais_hybrid",
    },
    {
      title: "Donate",
      description: "Support our causes with a one-time or recurring donation.",
      image: "https://img.freepik.com/free-photo/people-taking-care-together-donations_23-2148687307.jpg?uid=R152685630&ga=GA1.1.1512880784.1715701845&semt=ais_hybrid",
    },
    {
      title: "Participate in Events",
      description: "Attend events and activities to support our initiatives.",
      image: "https://img.freepik.com/premium-photo/group-people-with-red-white-flag-red-heart-that-says-world-day_793999-4423.jpg?uid=R152685630&ga=GA1.1.1512880784.1715701845&semt=ais_hybrid",
    },
  ];
  
  const GetInvolved = () => (
    <section className="py-12 w-[80%] mx-auto bg-white">
      <div className="">
        <h2 className="text-2xl font-bold text-primary text-center mb-8">Get Involved</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {involvementOptions.map((option, index) => (
            <Card className="flex p-4 flex-col justify-center items-center" key={index}>
              <Image className="w-full h-44 rounded" width={1000} height={1000} src={option.image} alt={option.title} />
              <CardHeader>
                <CardTitle className="font-semibold -my-3">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center -my-2">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  export default GetInvolved;
  