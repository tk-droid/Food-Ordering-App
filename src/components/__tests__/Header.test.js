import React from "react"
import { fireEvent } from "@testing-library/react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

test("should render Header Component with a Login Button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
     )
            //   const headerWithLoginButton = screen.getByText("Login")
              const headerWithLoginButton = screen.getByRole("button", {name: "Login"})
              // Inabove statemnt we have put {name: "Login"} because if there were multiple..
              //.. buttons like add to cart, Login and Logout
              // We can specifically find Login or any other btn by providing 2nd parameter.
            //   console.log(headerWithLoginButton)
              expect(headerWithLoginButton).toBeInTheDocument()
})
//Checking Login and Logout btn feature
it("should check Login to Logout and Vice Versa after Click", ()=>{
    render(
     <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>)

        const loginButton = screen.getByRole("button", {btnName: "Login"})
        fireEvent.click(loginButton)
        const logoutButton = screen.getByRole("button", {btnName: "Logout"})
        // expect(loginButton.toBeInTheDocument)
        expect(logoutButton).toBeInTheDocument() 
})

test("if cart Items are zero", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
      const seeCartItems = screen.getByText("Cart(0)")
      expect(seeCartItems).toBeInTheDocument()
})
test("if cart Items are zero", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
      const seeCartItems = screen.getByText(/Cart/)
      expect(seeCartItems).toBeInTheDocument()
})