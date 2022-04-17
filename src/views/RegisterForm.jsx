import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export default function RegisterForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      select: {},
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-50 m-auto mt-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>name</Form.Label>
          <input
            className="form-control"
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter name"
          />
          {errors.name && (
            <span className="text-danger small mt-2">
              This field is required
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password?.type === "required" && (
            <span className="text-danger small mt-2">
              This field is required
            </span>
          )}

          {errors.password?.type === "minLength" && (
            <span className="text-danger small mt-2">minimum length is 6</span>
          )}
        </Form.Group>

        <div>
          <p className="mt-3 mb-0">Gender</p>
          <div className="form-check">
            <label htmlFor="maleRadoBtn">
              <input
                {...register("gender", { required: true })}
                type="radio"
                name="gender"
                value="male"
                className="form-check-input"
                id="maleRadoBtn"
              />{" "}
              male
            </label>
          </div>
          <div className="form-check">
            <label htmlFor="femaleRadoBtn">
              <input
                {...register("gender", { required: true })}
                type="radio"
                name="gender"
                value="female"
                className="form-check-input"
                id="femaleRadoBtn"
              />{" "}
              female
            </label>
          </div>
          <div className="text-danger">
            {errors.gender?.type === "required" && "this field is required"}
          </div>
        </div>

        <Form.Group className="my-3">
          <Controller
            name="food"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
                isMulti
              />
            )}
          />
          <div className="text-danger">
            {errors.food?.type === "required" && "this field is required"}
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
