const InputBox = ({ name, type, id, value, placeholder, icon }) => {
    return (
        // Container div for the input and icon
        <div className="relative w-[100%] mb-4">
            {/* Input element with various props for customization */}
            <input
                name={name}                // Name attribute for the input
                type={type}                // Type attribute for the input (e.g., text, email, password)
                id={id}                    // ID attribute for the input
                defaultValue={value}       // Default value for the input field
                placeholder={placeholder}  // Placeholder text for the input
                className="input-box"      // CSS class for styling the input
            />

            {/* Icon element for the input field */}
            <i className={"fi " + icon + " input-icon"}></i>
        </div>
    );
}
export default InputBox;
