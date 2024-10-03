import BloodDonor from "@/components/main/Home/BloodDonor/BloodDonor";
import FindBlood from "@/components/main/Home/FindBlood/FindBlood";


// sticky top-0 backdrop-blur border-b z-10

const BloodBankPage = () => {
    return (
        <div className="min-h-screen">
            <div className=" mt-32 -mb-10">
            <FindBlood />
            </div>
           <BloodDonor />
        </div>
    );
};

export default BloodBankPage;