import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter} from "react-router-dom"
import Body from "../Body"
import React from "react"
import "@testing-library/jest-dom"
import MOCK_DATA from "./mocks/apiMockData.json"
import { act } from "react"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should search Restaurant List with any word, here I have used pizza", async ()=>{ 
await act(async()=> render(
<BrowserRouter>
<Body/>
</BrowserRouter>
)
)
const allCardsBeforeSearch = screen.getAllByTestId("resCard")
expect(allCardsBeforeSearch.length).toBe(20)
const searchButton = screen.getByRole("button", { name: "Search"})
const searchInput = screen.getByTestId("searchInput")
fireEvent.change(searchInput, {target: {value:"pizza"}})
fireEvent.click(searchButton)
const allCardsAfterSearch = screen.getAllByTestId("resCard")
expect(allCardsAfterSearch.length).toBe(3)
 })

it("should check Top rated Restaurants", async ()=>{
    await act(async()=>{
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )
    })
    
    const topRatedButton = screen.getByRole("button", {name:"Top Rated Restaurants"})
    fireEvent.click(topRatedButton)
    const topResAfterClick = screen.getAllByTestId("resCard")
     expect(topResAfterClick.length).toBe(9) 
    
}) 