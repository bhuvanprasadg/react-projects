async function getAllBooksBorrowedByStudent(student_id){
    const requestOptions = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
    
      return fetch(
        `/students/${student_id}`,
        requestOptions
      ).then((response) => response.json());
}

export default getAllBooksBorrowedByStudent;