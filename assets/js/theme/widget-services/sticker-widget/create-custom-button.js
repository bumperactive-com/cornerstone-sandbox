export default function createCustomButton(labelText, containerId, labelClassName, inputClassName, inputId) {
    const sizeDiv = document.createElement("div");
    const form = document.getElementById(containerId);
    sizeDiv.id = "sizeDiv";

    const labelValue = document.createElement('label');
    labelValue.innerText = labelText;
    labelValue.className = labelClassName;

    const inputValue = document.createElement('input');
    inputValue.className = inputClassName;
    inputValue.type = "radio";
    inputValue.name = "radio";
    inputValue.value = "";
    inputValue.id = inputId;

    sizeDiv.appendChild(inputValue);
    sizeDiv.appendChild(labelValue);
    form.appendChild(sizeDiv);
}