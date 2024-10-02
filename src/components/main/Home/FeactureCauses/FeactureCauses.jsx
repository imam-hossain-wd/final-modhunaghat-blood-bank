import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card"; // Ensure the path is correct
import { Button } from "../../../ui/button";

const causes = [
  {
    title: "Blood Donation",
    image:
      "https://cdn-icons-png.freepik.com/256/2945/2945592.png?ga=GA1.1.1512880784.1715701845&semt=ais_hybrid",
  },
  {
    title: "Support Street Children",
    image:
      "https://cdn-icons-png.freepik.com/256/14532/14532301.png?ga=GA1.1.1512880784.1715701845&semt=ais_hybrid",
  },
  {
    title: "Community Support",
    image:
      "https://cdn-icons-png.freepik.com/256/1476/1476143.png?ga=GA1.1.1512880784.1715701845&semt=ais_hybrid",
  },
  {
    title: "Environmental Protection", // New title for the cause
    image:
      "https://cdn-icons-png.freepik.com/256/1494/1494937.png?ga=GA1.1.1512880784.1715701845&semt=ais_hybrid", // New image link for the cause
  },
];

const FeaturedCauses = () => {
  return (
    <section className="py-8 w-[80%] mx-auto">
      <div className="">
        <h2 className="text-2xl text-primary font-bold text-center mb-8">
          Making a Difference Together
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {causes.map((cause, index) => (
            <Card
              className="flex bg-white flex-col justify-center items-center py-3"
              key={index}
            >
              <Image
                width={100}
                height={100}
                src={cause.image}
                alt={cause.title}
                className="w-20 h-20"
              />
              <p className="font-semibold mt-2">{cause?.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCauses;
