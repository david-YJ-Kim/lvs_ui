import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
`;

interface IForm {
  id: string;
  name: string;
}

export default function FormProvider() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();

  // Define validation rules for each field
  const fields = [
    {
      name: "id",
      label: "ID",
      validation: {
        ...register("id", {
          required: "ID is required",
          minLength: {
            value: 6,
            message: "ID must be at least 6 characters long",
          },
        }),
      },
    },
    {
      name: "name",
      label: "NAME",
      validation: {
        ...register("name", {
          required: "Name is required",
          minLength: {
            value: 8,
            message: "NAME must be at least 8 characters long",
          },
        }),
      },
    },
  ];

  const onValid = (data: IForm) => {
    alert(JSON.stringify(data));

    fields.map((field) => setValue(field.name as keyof IForm, ""));
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onValid)}>
        {fields.map((field) => (
          <StyledDiv key={field.name}>
            <span>{field.name}</span>
            <input {...field.validation} placeholder={field.name} />
            <span> {(errors as any)[field.name]?.message} </span>
          </StyledDiv>
        ))}
        <button> add </button>
      </StyledForm>
    </>
  );
}
