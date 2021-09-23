import React, {useState} from "react";
import './Custom-dropdown.css';

export default function CustomDropdown({label, items, name, onChange}) {
    const [selectedValue, setSelectedValue] = useState(items[0]);

    const handleChange = (event) => {
        const selected = items.find(item => item.id === event.target.value);
        setSelectedValue(selected);
        onChange && onChange({[event.target.name]: event.target.value});
    };

    return(
        <div>
            <div className="custom-dropdown__container">
                <label className="custom-dropdown__label">{label}</label>
                <select
                    className="custom-dropdown__select"
                    value={selectedValue.id}
                    onChange={handleChange}
                    name={name}
                >
                    {items && items.map(item => (
                        <option className="custom-dropdown__option" key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>

            <div className="custom-dropdown__details">
                <pre>{JSON.stringify(selectedValue, null, 2)}</pre>
            </div>
        </div>
    )
}