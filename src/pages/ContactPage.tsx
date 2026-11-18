import { useState, type FormEvent } from 'react';
import type { ContactFormValues } from '../types';
import './ContactPage.css';

const emptyForm: ContactFormValues = { nombre: '', correo: '', mensaje: '' };

export function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(emptyForm);
  const [notice, setNotice] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(`Gracias, ${values.nombre}. Tu mensaje está listo para enviar.`);
    setValues(emptyForm);
  }

  return (
    <section className="page-section" aria-labelledby="contact-title">
      <h1 id="contact-title">Contacto</h1>
      <p>Escríbeme y te responderé lo antes posible.</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field"><label className="form__label" htmlFor="name">Nombre</label><input className="form__input" id="name" name="nombre" autoComplete="name" required value={values.nombre} onChange={(event) => setValues({ ...values, nombre: event.target.value })} /></div>
        <div className="form__field"><label className="form__label" htmlFor="email">Correo electrónico</label><input className="form__input" id="email" name="correo" type="email" autoComplete="email" required value={values.correo} onChange={(event) => setValues({ ...values, correo: event.target.value })} /></div>
        <div className="form__field"><label className="form__label" htmlFor="message">Mensaje</label><textarea className="form__input" id="message" name="mensaje" rows={5} required value={values.mensaje} onChange={(event) => setValues({ ...values, mensaje: event.target.value })} /></div>
        <button className="button" type="submit">Enviar mensaje</button>
        <p className="form__notice" aria-live="polite">{notice}</p>
      </form>
    </section>
  );
}
