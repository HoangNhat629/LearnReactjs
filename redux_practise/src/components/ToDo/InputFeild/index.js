import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
InputFeild.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
function InputFeild(props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const hasError = formState.touchedFields && formState.errors;
  return (
    <Controller
      name={name}
      control={form.control}
      fullWidth
      label={label}
      disabled={disabled}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            error={!!hasError}
            helperText={formState.errors.title?.message}
          />
        );
      }}
    />
  );
}
export default InputFeild;
