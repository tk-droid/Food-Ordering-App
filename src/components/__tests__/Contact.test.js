import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
import React from "react"


describe("Checking Contact page", ()=>{

// beforeAll(()=>{
//         console.log("Running before All tests")
//     })


    it("should load Contact Componenet", ()=>{
        render(<Contact />) 
        const heading  = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
     
     }) 
     
    test("should have button ", ()=>{
         render(<Contact />) 
         const button  = screen.getByRole("button")
         expect(button).toBeInTheDocument()
      
      }) 

    test("checking placeholder as the word Name", ()=>{
            render(<Contact />)
         const inputName = screen.getByPlaceholderText("Name")
         expect(inputName).toBeInTheDocument()
         })
        
    test("should look for all input forms", ()=>{
                render(<Contact/>)
                const allInputForms = screen.getAllByRole("textbox")
                // expect(allInputForms).toBeInTheDocument()
                // console.log(allInputForms)
         })
})

