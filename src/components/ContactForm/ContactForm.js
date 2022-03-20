import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [instruction, setInstruction] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'instruction':
        setInstruction(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ strMeal: name, strInstructions: instruction });
    reset();
  };

  const reset = () => {
    setName('');
    setInstruction('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.formLabel}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
          className={s.formInput}
        />
      </label>

      <label className={s.formLabel}>
        Instruction
        <textarea
          type="text"
          name="instruction"
          value={instruction}
          required
          onChange={handleChange}
          className={s.formInput}
        />
      </label>

      <button type="submit" className={s.button}>
        Add recipe
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
