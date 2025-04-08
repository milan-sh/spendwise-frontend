import { Logo, ListItem, Datepicker, WalletCard } from "../components/";
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
      <div className="dashbaord col-span-3 p-6">
        <div className="w-full inline-flex justify-end">
          <Datepicker />
        </div>
        <h4 className="text-2xl font-medium">Summary</h4>
        <p className="text-gray-200">1 Jan,2025 - 28 Jan,2025</p>
        <div className="py-6 grid grid-cols-4 gap-x-4">
          <WalletCard
          balance={10000}
          title='Balance'
          />
          <WalletCard
          balance={10000}
          title='Income'
          percent={12}
          />
          <WalletCard
          balance={10000}
          title='Expenses'
          percent={12}
          inProfit={false}
          />
          <WalletCard
          balance={10000}
          title='Savings'
          percent={12}
          inProfit={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
