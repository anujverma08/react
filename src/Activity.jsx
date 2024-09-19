import React from "react";
import ReactDOM from "react-dom";
import "./Activity.css"; // Optional for styling if you're using an external CSS file

function Activity() {
  return (
    <div>
        <table><caption>Details</caption></table>
       <table>
      
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
        <tbody>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td >Maria Anders</td>
            <td >Germany</td>
          </tr>
          <tr>
            <td >Centro comercial Moctezuma</td>
            <td >Francisco Chang</td>
            <td >Mexico</td>
          </tr>
      </tbody>
    </table>

      <p >
        <span >React JS</span>
        <br />
        - React JS is a free library for making websites look and feel cool. It’s
        like a special helper for JavaScript. People from Facebook and other
        communities work together to keep it awesome and{" "}
        <span>up-to-date</span>.
      </p>

      <p >
        <span >ReactDOM</span>
        <br />
        - ReactDOM is a package in React that provides DOM-specific methods that
        can be used at the top level of a web app to enable an efficient way of
        managing <span >DOM elements</span> of the web
        page.
      </p>
    </div>
  );
}



export default Activity;
