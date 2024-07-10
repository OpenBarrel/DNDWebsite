import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function MyNavbar() {
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <div class ="container-fluid" id="navbar-container">
          <a class="navbar-brand" href='/'> <img src='https://cdn-icons-png.flaticon.com/512/31/31737.png' width='30' height='30' className="d-inline-block align-top"></img>D&D WIKI</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"></button>
          <div class='collapse navbar-collapse'>
            <a class='nav-link' id='link1' href='/'>Home</a>
            <a class='nav-link' id='link1' href='#classes'>Classes</a>
            <a class='nav-link' id='link1' href='#races'>Races</a>
            <a class='nav-link' id='link1' href='#spells'>Spells</a>
          </div>
        </div>
      </nav>
    );
}

export default MyNavbar;