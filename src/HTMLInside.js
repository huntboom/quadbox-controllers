import { Html } from '@react-three/drei'
import Button from '@mui/material/Button';


export default function HTMLInside() {
  return(
      <Html center={true}  position={[0,55,0]}>
        <div className='overlayed'>
  <Button style={{
        borderRadius: 35,
        fontweight:0,
        color:'black',
        backgroundColor: "white",
        boxshadow: '5px 10px',
        padding: "18px 36px",
        fontSize: "18px",
    }} variant='contained'>ORDER NOW</Button>
          </div>
      </Html>
  );
}
