import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AppButton from "../../components/AppButton/AppButton";
import AppLabel from "../../components/AppLabel/AppLabel";
import { UserInfo } from "../../type/userInfo";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInfo>();

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");

  const onSubmitHandler: SubmitHandler<UserInfo> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <AppLabel htmlFor="name" text="이름 : " />
      <input
        id="name"
        {...register("name", { required: true, minLength: 1, maxLength: 20 })}
      />
      {errors.name && errors.name.type === "required" && (
        <div>이름을 입력해주세요</div>
      )}
      {errors.name && errors.name.type === "minLength" && (
        <div>이름은 최소 1글자 입력해야합니다</div>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <div>이름은 최대 20글자만 입력할 수 있습니다</div>
      )}
      <AppLabel htmlFor="nickname" text="닉네임 : " />
      <input
        id="nickname"
        {...register("nickname", {
          required: true,
          minLength: 1,
          maxLength: 10,
        })}
      />
      {errors.nickname && errors.nickname.type === "required" && (
        <div>닉네임을 입력해주세요</div>
      )}
      {errors.nickname && errors.nickname.type === "minLength" && (
        <div>닉네임은 최소 1글자 입력해야합니다</div>
      )}
      {errors.nickname && errors.nickname.type === "maxLength" && (
        <div>닉네임은 최대 20글자만 입력할 수 있습니다</div>
      )}
      <AppLabel htmlFor="email" text="이메일 : " />
      <input
        id="email"
        {...register("email", {
          required: true,
          pattern: /[^\s@]+@[^\s@]+\.[^\s@]+/,
        })}
        type="email"
      />
      {errors.email && errors.email.type === "required" && (
        <div>이메일을 입력해주세요</div>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <div>올바른 이메일 형식이 아닙니다</div>
      )}
      <AppLabel htmlFor="password" text="비밀번호 : " />
      <input
        id="password"
        {...register("password", { required: true, minLength: 6 })}
        type="password"
      />
      {errors.password && errors.password.type === "required" && (
        <div>비밀번호를 입력해주세요</div>
      )}
      {errors.password &&
        errors.password.type === "minLength" && ( // TODO 대소문자,특수문자 섞어서
          <div>비밀번호는 최소 6글자 입력해야합니다</div>
        )}
      <AppLabel htmlFor="password_confirm" text="비밀번호확인 : " />
      <input
        id="password_confirm"
        {...register("password_confirm", {
          required: true,
          validate: (value) => value === passwordRef.current,
        })}
        type="password"
      />
      {errors.password_confirm &&
        errors.password_confirm.type === "required" && (
          <div>비밀번호를 한번 더 입력해주세요</div>
        )}
      {errors.password_confirm &&
        errors.password_confirm.type === "validate" && (
          <div>설정한 비밀번호와 다릅니다</div>
        )}
      <AppButton
        width={"80px"}
        className={"registerBtn"}
        type={"submit"}
        text="가입하기"
      />
    </form>
  );
};

export default Register;
