import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Wrapper from "../../components/Wrapper";
import toast, { Toaster } from "react-hot-toast";
import InputPassword from "../../components/InputPassword";
import axios from "axios";
import { URL as baseURL } from "../../utils/base";
import { IconChoice } from "../../utils/IconChoice";
import { Toast } from "../../components/Toast";

export default function Login() {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Deve ser um E-mail válido!")
      .required("E-mail é um campo obrigatório!"),
    password: Yup.string()
      .min(6, "A senha deve conter pelo menos 6 caracteres!")
      // .min(8, "A senha deve conter pelo menos 8 caracteres!")
      .required(),
  });

  const { register, handleSubmit, formState } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const handleSubmitForm = (body) => {
    axios
      .post(baseURL + "/login", body)
      .then(() => {
        toast(
          (t) => (
            <Toast
              type={"success"}
              message={"Login realizado com sucesso!"}
              onClick={() => toast.dismiss(t.id)}
            >
              <IconChoice
                icon="check"
                width="24px"
                height="24px"
                color="#fff"
              />
            </Toast>
          ),
          {
            style: {
              backgroundColor: "var(--th-color-text-success)",
              borderRadius: "10px",
            },
          }
        );
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast(
          (t) => (
            <Toast
              type={"error"}
              message={"E-mail e/ou senha incorretos"}
              onClick={() => toast.dismiss(t.id)}
            >
              <IconChoice
                icon="close"
                width="24px"
                height="24px"
                color="#fff"
              />
            </Toast>
          ),
          {
            style: {
              backgroundColor: "var(--th-color-text-error)",
              borderRadius: "10px",
            },
          }
        );
      });
  };

  return (
    <Wrapper>
      <div className={styles.card__container}>
        <section className={styles.card__body}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                {...register("email")}
                autoFocus={true}
                type="email"
                name="email"
                id="email"
                placeholder="exemplo@usarp.com"
                required
              />
              {errors.email && (
                <p className={styles.card__error}>{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <InputPassword
                label={"password"}
                register={register}
                type="password"
                name="password"
                id="password"
                minLength="6"
                required={errors.password ? true : false}
                placeholder="•••••••••"
              />
              {errors.password && (
                <p className={styles.card__error}>{errors.password.message}</p>
              )}
              <b>Esqueci minha senha</b>
            </div>
            <button
              disabled={!formState.isValid}
              className={styles.card__button}
              type="submit"
            >
              ENTRAR
            </button>
          </form>
        </section>
        <section className={styles.card__footer}>
          <p>
            Ainda não possui uma conta?
            <Link to="cadastro">
              <b> Criar agora</b>
            </Link>
          </p>
        </section>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 314,
          left: 120,
          bottom: 120,
          right: 120,
        }}
      />
    </Wrapper>
  );
}
