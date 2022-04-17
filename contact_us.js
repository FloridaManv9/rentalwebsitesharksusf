var max = 500;
var textarea = document.getElementById('ticket_textbox')
var info = document.getElementById('remaining_count')
var current_textValue = document.getElementById('current_count')
//Init the count for the first time
//info.textContent = max - textarea.value.length;
info.textContent = max
current_textValue.textContent = textarea.value.length
textarea.addEventListener('input', function () {
    current_textValue.textContent = this.value.length;
})