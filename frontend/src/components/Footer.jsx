import React from "react";

function Footer() {
  return (
    <nav>
        <footer style={{zIndex:"109", position:"fixed"}}>
            <p style={{"float": "left", "margin-left": "5vw"}}><i>Residencely</i></p>
            <p style={{"float":"right", "margin-right": "5vw"}}>Signed in as Xxxx Xxxxxx</p>
        </footer>
    </nav>
  );
}

export default Footer;