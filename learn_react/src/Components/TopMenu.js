import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../pages/cart";
function TopMenu() {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Shop</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavLink>
                  <Link to="/products">Products</Link>
                </NavLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavLink>
                  <CartContext.Consumer>
                    {({ cartItems }) => (
                      <Link to="/cart">Cart ({cartItems.length})</Link>
                    )}
                  </CartContext.Consumer>
                </NavLink>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default TopMenu;
