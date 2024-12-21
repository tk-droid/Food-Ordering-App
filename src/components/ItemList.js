import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import React from "react";

const ItemList = React.memo(({ items }) => { 
  const dispatch = useDispatch()
  
  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }
      return (
        <div>
          {items.map(item => (
            <div data-testid="foodItems" key={item.title}>
              <div className="p-4 m-4 border-2 border-gray-400 rounded-lg shadow hover:shadow-lg hover:border-blue-500 transition-shadow duration-200 flex justify-between items-center">
                <span className="text-lg font-semibold">{item.title}</span>
                <button data-testid="itemListBtn" className="p-2 rounded-lg bg-green-400 text-white shadow-lg hover:bg-green-600 transition duration-200 transform hover:scale-105"
                onClick={()=>handleAddItem(item)}>
                  Add+
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    })
  
  export default ItemList;
  