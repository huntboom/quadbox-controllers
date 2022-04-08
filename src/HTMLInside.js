import { Html } from '@react-three/drei'
import Button from '@mui/material/Button';

export default function HTMLInside() {
  return(
      <Html center={true}  position={[0,55,0]}>
        <div className='overlayed'>
         <div className='body'>
            <h2 className='motto'>
            </h2>
            <Button style={{ borderRadius: 25,
        fontweight:0,
        color:'black',
        backgroundColor: "white",
        boxshadow: '5px 10px',
        padding: "18px 56px",
        fontSize: "18px",
    }} variant='contained'>ORDER NOW</Button>
         </div>
          </div>
      </Html>
  );
}
