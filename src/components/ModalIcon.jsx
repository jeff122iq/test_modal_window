import React from 'react';
import FormatBold from "@material-ui/icons/FormatBold"
import List from "@material-ui/icons/List"
import Link from "@material-ui/icons/Link"
import MoreVert from "@material-ui/icons/MoreVert"
import "./style.css"

export default function ModalIcon() {
  return (
    <>
    <div className="modalIcon">
      <input type="text" name="" id="" placeholder="Title"/>
      <textarea type="text" name="" id="" placeholder="Text"/>
      <div className="navBlock">
        <ul>
          <li><button><List/></button></li>
          <li><button><Link/></button></li>
          <li><button><FormatBold/></button></li>
        </ul>
          <button><MoreVert/></button>
          <h1>close</h1>
      </div>
    </div>
    </>
  );
}
