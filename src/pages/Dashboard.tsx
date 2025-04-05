import { Logo, ListItem } from "../components/";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import wallet from "../assets/svg/wallet.svg";
import dashbaord from "../assets/svg/dashboard.svg";

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-4 w-full">
      <div className="sidebar bg-gray-800 p-4">
        <Logo largeText="2xl" smallText="lg" />
        <div className="text-center">
          <Avatar className="mx-auto md:mt-10 mt-3 size-16">
            <AvatarImage className="" src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-primary font-semibold text-2xl mt-1">
            Milan Singh
          </h2>
          <div className=" mt-2 flex items-center justify-center gap-x-4">
            <img className="size-10" src={wallet} alt="" />
            <h2 className="text-3xl">Rs. 10,000</h2>
          </div>
          <div className="md:mt-16 flex flex-col items-center justify-center gap-2">
            <ListItem
              icon={dashbaord}
              text="Dashboard"
              className="text-gray-600"
            />
            <ListItem
              icon={dashbaord}
              text="Budget"
              className="text-gray-600"
            />
            <ListItem
              icon={dashbaord}
              text="Expended"
              className="text-gray-600"
            />
            <ListItem
              icon={dashbaord}
              text="Input page"
              className="text-gray-600"
            />
          </div>
          <div className="md:mt-16 flex flex-col items-center justify-center gap-2">
            <ListItem
              icon={dashbaord}
              text="Settings"
              className="text-gray-600"
            />
            <ListItem
              icon={dashbaord}
              text="Logout"
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
      <div className="dashbaord col-span-3"></div>
    </div>
  );
};

export default Dashboard;
