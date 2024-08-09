import css from './CheckBox.module.css';
import

const CheckboxButton = ({ checked, onChange, icon }) => {
  return (
    <label className="checkbox-button">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-button-input"
      />
      <div className="checkbox-button-box">
        <div className="checkbox-button-icon">
          <Icon id={icon} width={20} height={20} /> 
        </div>
      </div>
    </label>
  );
};

export default CheckboxButton;
