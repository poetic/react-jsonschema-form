import React, { PropTypes } from "react";


function DateWidget({
  schema,
  id,
  value,
  required,
  onChange
}) {
  return (
    <input type="date"
      id={id}
      className="form-control"
      value={typeof value === "undefined" ? "" : value}
      required={required}
      onChange={(event) => onChange(event.target.value)} />
  );
}

if (process.env.NODE_ENV !== "production") {
  DateWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default DateWidget;