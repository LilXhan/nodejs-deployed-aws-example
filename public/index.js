const button = document.querySelector('#button-generator');

const fetchApi = async () => {
  const res = await fetch(`http://127.0.0.1:8080/api/get-uuid`);
  const { uuid } = await res.json();
  return uuid;
};

button.addEventListener('click', async () => {
    const uuid = await fetchApi();

    const result = document.querySelector('#result');
    result.textContent = uuid;
});