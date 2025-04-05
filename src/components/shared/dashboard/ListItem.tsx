

interface PropType{
    icon:string
    text:string
    className?:string
}
const ListItem = ({icon, text, className=""}:PropType) => {
  return (
    <div className="grid grid-cols-4 justify-items-start gap-x-2 px-2 cursor-pointer bg-white rounded-lg">
      <img className="size-10" src={icon} alt="" />
      <h2 className={`text-xl flex items-center col-span-3 ${className}`}>{text}</h2>
    </div>
  );
};

export default ListItem;
