const box = document.getElementById('box');
document.getElementById('background-color').addEventListener('input', function() {
box.style.backgroundColor = this.value;
});
document.getElementById('width').addEventListener('input', function() {
box.style.width = this.value + 'px';
});
document.getElementById('height').addEventListener('input', function() {
box.style.height = this.value + 'px';
});
document.getElementById('border-radius').addEventListener('input', function() {
box.style.borderRadius = this.value + 'px';
});