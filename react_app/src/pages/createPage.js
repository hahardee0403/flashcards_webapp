import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ children }) {
  const navigate = useNavigate();
  return (
    <div className="nav-bar">
      <h1 className="title">{children}</h1>
      <button className="btn back-btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

function InputField({ id, children }) {
  return (
    <>
      <input
        type="text"
        id={id}
        className="input-field"
        placeholder={children}
      />
    </>
  );
}

function ImportBtn() {
  return (
    <div className="import">
      <button className="btn import-btn">+</button>
      <p className="import-label">Import File</p>
    </div>
  );
}

function Inputs() {
  return (
    <div className="input-cntr">
      <InputField id="name">Name</InputField>
      <InputField id="subject">Subject</InputField>
      <ImportBtn />
    </div>
  );
}

function CreateBtn({ children }) {
  return <button className="btn enter-btn">{children}</button>;
}

export default function CreatePage() {
  return (
    <div className="main-cntr">
      <NavBar>Create a New Deck</NavBar>
      <Inputs />
      <CreateBtn>Create</CreateBtn>
    </div>
  );
}
