import MyComponents from "@/components/MyComponents";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      <MyComponents />
      <Button className="ml-10 mt-10">
        Download Button
      </Button>
    </div>
  );
}
