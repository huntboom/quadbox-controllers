import Header from '../Header.js'

function Partselecter() {
    return(
        <div>
            <h1>Build Your Own Controller</h1>
            <h2>Step 1</h2>
            <p>Select Your Layout</p>
            <div>
                <button>WASD</button>
                <button>Straight 4</button>
            </div>
            <h2>Step 2</h2>
            <p>Choose your switches</p>
            <h2>Step 3</h2>
            <p>Add some color</p>
            
        </div>
    )
}
    

export default function Customizer() {
  
    return (
      <>
      <Header/>
      <Partselecter/>
      </>
  );
}
