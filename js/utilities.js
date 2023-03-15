function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textField = document.getElementById(elementId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
}

function setTextElementValueById(elementId, setValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = setValue;
}