import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestauranttCard"
import React from "react"
import "@testing-library/jest-dom"
import CONSTANT_DATA from "./mocks/RestauranttCardMock.json"
//We can give it any name, here I've given CONSTANT NAME 
// BUt akshay has given MOCK_DATA
//It is stroing the data of RestauranttCardMock.json

it("should see if RestaurantCard Component(along with props) is loading or not", ()=>{
render(<RestaurantCard resData={CONSTANT_DATA}/>)
const name = screen.getByText("BTW")
expect(name).toBeInTheDocument()
})