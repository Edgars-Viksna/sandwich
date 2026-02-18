import { useState, type JSX } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./WeatherApp.module.css";

type FormValues = {
  city: string;
};

type WeatherData = {
  name: string;
  sys: { country: string };
  main: { temp: number; pressure: number; humidity: number };
  wind: { speed: number };
};

const validationSchema = Yup.object({
  city: Yup.string()
    .trim()
    .min(2, "city must contain at least two symbols")
    .required("enter city"),
});

export default function WeatherApp(): JSX.Element {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  const apiKey = "71c8204a2ddedc1e36e942d29afc63e0";

  const handleSubmit = async (values: FormValues): Promise<void> => {
    try {
      setWeather(null);
      setError("");

      const city = encodeURIComponent(values.city.trim());
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok || data.cod !== 200) {
        throw new Error(data.message || "City not found");
      }

      setWeather(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Weather 😎 search</h2>
        <Formik<FormValues>
          initialValues={{ city: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.fieldRow}>
              <Field
                name="city"
                placeholder="enter city"
                className={styles.input}
              />
              <ErrorMessage
                name="city"
                render={(msg) => <div className={styles.validation}>{msg}</div>}
              />
              <button type="submit" className={styles.button}>
                Submit
              </button>
            </div>
          </Form>
        </Formik>

        {error && <div className={styles.errorBox}>Error: {error}</div>}
        {weather && (
          <div className={styles.result}>
            <h3 className={styles.city}>
              {weather.name}, {weather.sys.country}
            </h3>
            <div className={styles.bigTemp}>
              {Math.round(weather.main.temp)}°C
            </div>

            <div className={styles.meta}>
              <div>Pressure: {weather.main.pressure} hPa</div>
              <div>Humidity: {weather.main.humidity}%</div>
              <div>Wind: {weather.wind.speed} m/s</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
