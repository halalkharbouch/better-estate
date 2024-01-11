import PofileCard from "../components/ProfileCard";
import Header from "../components/Header";
import ProfileListingsCard from "../components/ProfileListingsCard";
import ProfileNotificationsCard from "../components/ProfileNotificationsCard";

export default function () {
  return <div>
    <Header />
    <div className="flex justify-center mt-10">
        <div className="grid grid-flow-col gap-x-10 gap-y-11 grid-cols-2 grid-rows-2">
            <div className="row-span-2">
                <PofileCard />
            </div>
            <div className="row-span-1">
                <ProfileListingsCard />
            </div>
            <div className="">
                <ProfileNotificationsCard />
            </div>
        </div>
        
    </div>
  </div>;
}
