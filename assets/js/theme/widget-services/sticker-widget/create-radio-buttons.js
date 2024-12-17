export default function createRadioButtons(labels, containerId, labelClassName, inputClassName) {
    const form = document.getElementById(containerId);

    labels.forEach(value => {
        const sizeDiv = document.createElement("div");
        const labelValue = document.createElement('label');
        const inputValue = document.createElement('input');

        sizeDiv.id = "sizeDiv";
        labelValue.innerHTML = value;
        labelValue.className = labelClassName;
        inputValue.className = inputClassName;
        inputValue.type = "radio";
        inputValue.name = "radio";
        inputValue.value = value;

        sizeDiv.appendChild(inputValue);
        sizeDiv.appendChild(labelValue);
        form.appendChild(sizeDiv);
    });
}