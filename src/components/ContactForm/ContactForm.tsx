import styles from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

// Типы для данных формы

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "name must be minimum two symbols")
    .required("enter your name"),

  email: Yup.string().email("wrong email").required("enter your email"),

  message: Yup.string()
    .min(10, "minimum 10 symbols")
    .required("enter your message"),
});

function ContactForm() {
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };
  const handleSubmit = (values: FormValues) => {
    console.log("Submited values", values);
    alert(`Message sent, ${values.name}`);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Form </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {/* 👉 Здесь: */}
          {/* <Formik> управляет состоянием формы;
    <Form> автоматически подключается к Formik-контексту;
    <Field> связан с конкретным полем данных (name);
    <ErrorMessage> отображает ошибки для указанного поля. */}
          <Form className={styles.Form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                placeholder="enter name"
                className={styles.input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="enter email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">message</label>
              <Field
                id="message"
                name="message"
                placeholder="enter message"
                className={styles.input}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={styles.error}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
export default ContactForm;

// Ключевые моменты:

// useFormik — это хук, поэтому:

// Следует правилам хуков React

// Схема Yup передается в конфигурацию через свойство validationSchema

// Formik автоматически:

// Выполняет валидацию при изменении значений и потере фокуса

// Сохраняет ошибки в formik.errors

// Отслеживает, какие поля были "тронуты" в formik.touched