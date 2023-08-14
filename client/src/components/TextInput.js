const TextInput = ({
    label,
    placeholder,
    className,
    value,
    setValue,
    labelClassName,
    type,
}) => {
    return (
        <div
            className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}
        >
            <label for={label} className={`font-semibold ${labelClassName}`}>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="text-xl p-3 border border-solid border-deepblue bg-glass rounded placeholder-deepblue"
                id={label}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};

export default TextInput;