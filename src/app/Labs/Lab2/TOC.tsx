import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TOC() {
  const router = useRouter();

  return (
    <Nav variant="pills" activeKey={router.pathname}>
      <NavItem>
        <Link href="/Labs" passHref legacyBehavior>
          <NavLink active={router.pathname === "/Labs"}>Labs</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="/Labs/Lab1" passHref legacyBehavior>
          <NavLink active={router.pathname === "/Labs/Lab1"}>Lab 1</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="/Labs/Lab2" passHref legacyBehavior>
          <NavLink active={router.pathname === "/Labs/Lab2"}>Lab 2</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="/Labs/Lab3" passHref legacyBehavior>
          <NavLink active={router.pathname === "/Labs/Lab3"}>Lab 3</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="/" passHref legacyBehavior>
          <NavLink active={router.pathname === "/"}>Kambaz</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <NavLink href="https://github.com/jannunzi" target="_blank">
          My GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
