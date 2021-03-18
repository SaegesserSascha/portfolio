import React from "react";

export default function TypographyTest() {
  return (
    <table>
      <tr>
        <td><h1 className="h1-fw-300">Heading 1</h1></td>
        <td><h1>Heading 1</h1></td>
        <td><h1 className="h1-fw-500">Heading 1</h1></td>
      </tr>
      <tr>
        <td><h2 className="h2-fw-300">Heading 2</h2></td>
        <td><h2>Heading 2</h2></td>
        <td><h2 className="h2-fw-500">Heading 2</h2></td>
      </tr>
      <tr>
        <td><h3 className="h3-fw-300">Heading 3</h3></td>
        <td><h3>Heading 3</h3></td>
        <td><h3 className="h3-fw-500">Heading 3</h3></td>
      </tr>
      <tr>
        <td><h4 className="h4-fw-300">Heading 4</h4></td>
        <td><h4>Heading 4</h4></td>
        <td><h4 className="h4-fw-500">Heading 4</h4></td>
      </tr>
      <tr>
        <td><p className="p-fw-300">Paragraph</p></td>
        <td><p>Paragraph</p></td>
        <td><p className="p-fw-500">Paragraph</p></td>
      </tr>
    </table>
  );
}