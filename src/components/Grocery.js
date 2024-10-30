const Grocery = ()=>{
return <h1 className="grocery-text text-xl"> This is loaded only when we click on Grocery in the header, by using Lazy Loading and Suspense, the Grocery component won't be bundled in index js file but a sep. file will be created for Grocery component.</h1>
}

export default Grocery