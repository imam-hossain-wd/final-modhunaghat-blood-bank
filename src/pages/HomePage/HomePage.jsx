import ExampleComponent from "@/components/ExampleComponents";
import BloodDonor from "@/components/main/Home/BloodDonor/BloodDonor";
import FeaturedCauses from "@/components/main/Home/FeactureCauses/FeactureCauses";
import FindBlood from "@/components/main/Home/FindBlood/FindBlood";
import GetInvolved from "@/components/main/Home/Getinvolve/Getinvolve";
import HomeBanner from "@/components/main/Home/HomeBanner/HomeBanner";

const HomePage = () => {
    return (
        <div>
           <HomeBanner />
           <ExampleComponent />
           <FindBlood />
           <BloodDonor />
           <FeaturedCauses />
           <GetInvolved />
        </div>
    );
};

export default HomePage;