// const cardsContainer = document.querySelector(".cards");

const delBtns = document.querySelectorAll(".delBtn");
delBtns.forEach((delBtn) => {
  delBtn.addEventListener("click", async (event) => {
    event.target.closest(".card").remove();
    const { id, type } = event.target.dataset;
    // console.log("id--------------", event.target.dataset.id);
    // console.log("type--------------", event.target.dataset.type);
    // console.log("event--------------", event.target);
    // if (event.target.tagName === "BUTTON") {
    // const { id, type } = event.target.dataset;
    // console.log("event.target.id-------------------", event.target.id);
    let delInfo = {};
    try {
      const response = await fetch("/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          type,
        }),
      });
      delInfo = await response.json();
      console.log("delInfo---------------", delInfo);
    } catch (err) {
      console.error("Ошибка удаления", err.message);
      // return alert(`Ошибка удаления, ${err.message}`);
    }
    // }
  });
});

// cardsContainer.addEventListener("click", async (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const { id, type } = event.target.dataset;
//     console.log("event.target.id-------------------", event.target.id);
//     event.target.closest(".card").remove();
//     let delInfo = {};
//     try {
//       const response = await fetch("/delete", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id,
//           type,
//         }),
//       });
//       delInfo = await response.json();
//       console.log("delInfo---------------", delInfo);
//     } catch (err) {
//       console.error("Ошибка удаления", err.message);
//       // return alert(`Ошибка удаления, ${err.message}`);
//     }
//   }
// });

// cardsContainer.addEventListener("click", async (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const { id, type } = event.target.dataset;
//     console.log("id------------>", id);
//     console.log("type------------>", type);
//     event.target.closest(".card").remove();
//     let delInfo = {};
//     try {
//       const response = await fetch("/delete", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id,
//           type,
//         }),
//       });
//       delInfo = await response.json();
//       console.log("delInfo---------------", delInfo);
//     } catch (err) {
//       console.error("Ошибка удаления", err.message);
//       // return alert(`Ошибка удаления, ${err.message}`);
//     }
//   }
// });

// cardsContainer.addEventListener("click", async (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const { id, type } = event.target.dataset;

//     event.target.closest(".card").remove();
//     let delInfo = {};
//     try {
//       const response = await fetch("/delete2", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id,
//           type,
//         }),
//       });
//       delInfo = await response.json();
//       console.log("delInfo---------------", delInfo);
//     } catch (err) {
//       console.error("Ошибка удаления", err.message);
//       // return alert(`Ошибка удаления, ${err.message}`);
//     }
//   }
// });
