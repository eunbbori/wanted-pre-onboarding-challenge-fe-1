import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserInfo } from "../../type/userInfo";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInfo>();

  // const passwordRef = useRef<string | null>(null);
  // passwordRef.current = watch("password");

  const onSubmitHandler: SubmitHandler<UserInfo> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <label>name</label>
      <input
        {...register("name", { required: true, minLength: 1, maxLength: 20 })}
      />
      <label>nickname</label>
      <input
        {...register("nickname", {
          required: true,
          minLength: 1,
          maxLength: 10,
        })}
      />
      <label>email</label>
      <input
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
        type="email"
      />
      <label>password</label>
      <input
        {...(register("password"), { required: true, minLength: 6 })}
        type="password"
      ></input>
      <label>password_confirm</label>
      <input
        {...register("password_confirm", {
          required: true,
          // validate: (value) => value === passwordRef.current,
        })}
        type="password"
      ></input>
      <button type="submit">가입하기</button>
    </form>
  );
};

export default Register;
