const Grocery = ()=>{
return <h1 className="grocery-text">This is Grocery Component which has many child components, it's a large file and we just want to load this only when we click on Grocery in the header, by using lazy and suspense, the Grocery component won't be bundled in index js file but a sep. file will be created for Grocery component, Check this in Network Tab after refreshing</h1>
}

export default Grocery