import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useState } from "react";
export function MainNavbar() {
  const [currentDate, setDate] = useState(
    new Date().toISOString().slice(0, 10),
  );
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Automate Order
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Milk Order
        </NavbarLink>
        <NavbarLink href="#">History</NavbarLink>
        <NavbarLink href="#">{currentDate}</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
