const menuItems = [
 {
  title: "Home"
 },
 {
  title: "Customizer"
 },
 {
  title: "Checkout"
 }
];

export default function Navbar() {
 return (
  <nav>
   <ul className="menus">
    {menuItems.map((menu, index) => {
     return (
      <li className="menu-items" key={index}>
       <a href="/#">{menu.title}</a>
      </li>
     );
    })}
   </ul>
  </nav>
 );
};
