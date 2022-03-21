import s from './Button.module.css';

const Button = ({ onClick, name }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
