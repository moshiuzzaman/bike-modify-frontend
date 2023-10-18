import React from "react";

type LabelProps = {
    label: string;
    required?: boolean;
}

const Label = ({ label, required }: LabelProps) => {
  return (
    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
      {label}{" "}
      {required ? (
        <span
          style={{
            color: "red",
            fontSize: "1.2rem",
          }}
        >
          *
        </span>
      ) : (
        ""
      )}
    </label>
  );
};

export default Label;