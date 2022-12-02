const delBtns = document.querySelectorAll('.delBtn');
delBtns.forEach((delBtn) => {
  delBtn.addEventListener('click', async (event) => {
    event.target.closest('.card').remove();
    const { id, type } = event.target.dataset;

    let delInfo = {};
    try {
      const response = await fetch('/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          type,
        }),
      });
      delInfo = await response.json();
      console.log('delInfo---------------', delInfo);
    } catch (err) {
      console.error('Ошибка удаления', err.message);
    }
  });
});
