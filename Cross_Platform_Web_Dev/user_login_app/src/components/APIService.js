const APIService = async (data) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/userData`, {
      method: "POST",
      headers: [
        ["Content-Type", "application/json"],
        ["Content-Type", "text/plain"],
      ],
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

export default APIService;

//  headers: {   # this is the key part
