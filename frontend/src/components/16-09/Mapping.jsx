import React from 'react';

function withWrapper(WrappedComponent){
return function WrapperComponents(props){
return(
<div style={{backgroundColor: 'lightgray', padding : '20px'}}>
  <WrappedComponent{... props}/>
</div>

);
};
};
function MyComponent(props){
return
<div>Hello, {props.name}!</div>;
}
const MyComponentWithWrapper = withWrapper(MyComponent);
function App(){
  return <MyComponentWithWrapper name="John"/>; 
}
export default App;

// const Mapping = ({ names }) => {
//   console.log(names)
//   return (
//     <div>
//       <h1>Mapping</h1>
//     {/* //   
//     //   {names.map((name, i) => ( */}
//     {/* //   <div>
//     //     <h3>Day of the Week - {name}</h3>
//     //     <h2>Students ID  -{i}</h2>
//     //   </div>))} */}


//     {names.map((name, i) => (
//         <div> key - {i}
//           <h3>{name}</h3>
//         </div>
//       ))}
//     </div >
//   )
// }

// export default Mapping