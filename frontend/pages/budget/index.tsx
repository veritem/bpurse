import NewBudget from "../../components/modals/new-budget";
import {
  BigDotIcon,
  DeleteIcon,
  EditIcon,
  WarningIcon,
} from "../../icons/icons";

const Container = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center flex mt-2">
      <div className="grid grid-cols-5">
        <div className="col-span-2 font-bold text-[#3A3737]">Budget</div>
        <div className="col-span-2"></div>
        <div className="col-span-1 mb-2">
          <button className="button border-2 rounded-full text-[#3A3737] font-bold px-3 py-1 rounded-full">
            Add New Budget
          </button>
        </div>
      </div>
      <div  className="grid grid-cols-3 gap-x-5 gap-y-3">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
        <BudgetContainer key={item} />
      ))}
      </div>
    </div>
  );
};
const BudgetContainer = () => {
  return (

    <div className="shadow-xl rounded p-3 border-1">
      <div className="grid grid-cols-2 gap-4">
        <button className="rounded-full shadow-md px-4 py-1 flex gap-2">
          <BigDotIcon /> Medical
        </button>
        <div className="w-25 ml-10">
          <WarningIcon />
        </div>
      </div>
      <div className="">
        <h5 className="font-bold mt-2">Remaining $5</h5>
        <hr className="bg-[#1D62F0] rounded-full h-3 mt-2" />

        <p className="text-[#5A4F4F] mt-2">$1200 of $1000</p>
      </div>
      <div className="grid grid-cols-3 mt-4">
        <div className="col-span-2">
          {" "}
          <p className="text-red-500">You've exceeded the limit !</p>
        </div>
        <div className="flex">
          <button className="mr-2">
            <EditIcon />
          </button>
          <button>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const BudgetPage = () => {
  return (
    <div>
     <Container/>
     {/* <NewBudget/> */}
    </div>
  );
};

export default BudgetPage;
