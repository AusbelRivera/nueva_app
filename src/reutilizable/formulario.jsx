import { useState } from 'react';
import styles from '../estilos/Formulario.module.css';

export function Formulario({ fields, onSubmit, boton }) {
    
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className={styles.formulario}>
            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field.name} className={styles['form-group']}>
                        <label className={styles.label}>{field.label}</label>
                        {field.type === 'select' ? (
                            <select
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                className={styles.input}
                            >
                                {field.options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        )}
                    </div>
                ))}
                <div className={styles.button_container}>
                    <button type="submit" className={styles.button}>{boton}</button>
                </div>
            </form>
        </div>
    );
}