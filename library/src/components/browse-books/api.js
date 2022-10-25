async function getAllBooks() {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(
    `/books`,
    requestOptions
  ).then((response) => response.json());
}

async function getAllStudents() {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(
    `/students`,
    requestOptions
  ).then((response) => response.json());
}

export {getAllStudents, getAllBooks};