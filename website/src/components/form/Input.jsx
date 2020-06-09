import React from "react";

export default function Input(props) {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
          onChange={(event) => props.onChange(event.target.value)}
        />
      </div>
    </div>
  );
}
