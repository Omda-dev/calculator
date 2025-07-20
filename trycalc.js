      function numbers(value) {
        document.getElementById(`desply`).value += value
      }
      function calculate() {
        try {
          document.getElementById('desply').value = eval(
            document.getElementById('desply').value
          )
        } catch (e) {
          document.getElementById('desply').value = 'Error'
        }
      }
      function clearS() {
        const input = document.getElementById('desply')
        input.value = ''
        input.placeholder = 'Cleared'
      }
      function deleteLast() {
  const input = document.getElementById('desply');
  input.value = input.value.slice(0, -1);
}