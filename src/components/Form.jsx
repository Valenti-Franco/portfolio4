import React, { useRef, useState } from "react";
import style from "./ContacMe.module.css";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const Form = () => {
  const [error, setError] = useState("Error al enviar el correo electrónico");
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Por favor, complete todos los campos.");
      toast.error(error);

      return;
    }
    if (!isEmailValid(formData.email)) {
      setError(
        "Por favor, ingrese una dirección de correo electrónico válida."
      );
      return;
    }
    emailjs
      .sendForm(
        "service_uleylub",
        "template_90ncj9i",
        form.current,
        "U9FP06-mnuchhRtY5"
      )
      .then(
        (result) => {
          setError("");
          toast.success("Email enviado exitosamente");
          // Restablecer los campos del formulario a valores iniciales
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setError("Error al enviar el correo electrónico ");
          toast.error("Error, email no enviado");
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <section className={style.coantainerForm}>
      <strong>Enviame un correo electronico</strong>
      <form className={style.form} ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">
          Nombre
          <input
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          Correo Electrónico
          <input
            id="email"
            placeholder="Ingresa tu correo electrónico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="subject">
          Asunto
          <input
            id="subject"
            placeholder="Ingresa el asunto"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="message">
          Mensaje
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Escribe tu mensaje aquí"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
      <Toaster client:visible />
    </section>
  );
};

export default Form;
