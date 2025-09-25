const input = document.getElementById('input');

function reverse(str) {
  return str.split('').reverse().join('');
}

function check() {
  const value = input.value;
  const reverseValue = reverse(value);

  if (value === reverseValue) alert('ok');
  else alert('no');

  input.value=" ";
}
