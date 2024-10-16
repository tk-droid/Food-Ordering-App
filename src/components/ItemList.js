import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => { 
const dispatch = useDispatch()
const handleAddItem = (item)=>{
  dispatch(addItem())
}
    return (
      <div>
        {items.map(item => (
          <div key={item.title}>
            <div className="p-4 m-4 border-2 border-gray-400 rounded-lg shadow hover:shadow-lg hover:border-blue-500 transition-shadow duration-200 flex justify-between items-center">
              <span className="text-lg font-semibold">{item.title}</span>
              <button className="p-2 rounded-lg bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-200 transform hover:scale-105"
              onClick={()=>handleAddItem(item)}>
                Add+
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;
  