
import React from "react"
import { act } from "react"
import { render } from "@testing-library/react"
import { fireEvent } from "@testing-library/react"
import { screen } from "@testing-library/react"
import MOCK_DATA from "./mocks/resMenuMock.json"
import "@testing-library/jest-dom"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should test Cart is updating in header and Cart page is upadating", async ()=>{
          await act(async()=>{
            render(<BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
              <RestaurantMenu/>
              <Cart/>
              </Provider>
              </BrowserRouter>
            )
            // const accordionPanel = screen.getByText("Meals (2)")
            // fireEvent.click(accordionPanel)

            // const xyz = screen.getAllByTestId("foodItems") 
            // expect(xyz.length).toBe(2)

            // const cartCheckBeforeClick = screen.getByText("Cart(0)")
            // expect(cartCheckBeforeClick).toBeInTheDocument()

            // const allBtn = screen.getAllByRole("button", { name: "Add+"})
            // fireEvent(allBtn[0])

            // const cartCheckAfterClick = screen.getByText("Cart(1)")
            // expect(cartCheckAfterClick).toBeInTheDocument()

            // fireEvent.click(allBtn[1])
            // const cartCheckAfterClick2 = screen.getByText("Cart(2)")
            // expect(cartCheckAfterClick2).toBeInTheDocument() 
          
           // const cartPageAAndNotCartStoreAfterClick = screen.getByText("Cart(5)")
           // saubway->create your own sand-> click first add button and thn 2, this will give 2 in cart and
           // 3 are from restaurantMenu and 2 are added in cart so 5 total
            // expect(cartPageAAndNotCartStoreAfterClick).toBeInTheDocument() 
               


             //Now W ehave cleared cart so, total were 5 minus 2, left with 3(these 3 are from restaurant Menu)           
            // fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}))
            //   expect(screen.getAllByTestId("foodItems").length).toBe(3)
          
         })  
})