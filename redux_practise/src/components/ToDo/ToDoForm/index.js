import React from "react";
import PropTypes from "prop-types";
import InputFeild from "../InputFeild/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};
function ToDoForm(props) {
  const schema = yup
    .object({
      title: yup.string().required("Please enter title"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: "title",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    console.log("ToDo:", value);
  };
  return (
    <>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputFeild name="title" label="ToDo" form={form} />
      </form>
    </>
  );
}
export default ToDoForm;
