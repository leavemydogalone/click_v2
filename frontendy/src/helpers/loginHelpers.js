export async function login(username, password, setCurrentUser) {
  try {
    const rawResponse = await fetch(
      `${process.env.REACT_APP_SERVER_PORT}/auth/login`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );

    const data = await rawResponse.json();
    setCurrentUser(data);
    console.log(data);
    localStorage.setItem("user", data.userId);
  } catch (err) {
    console.log(err);
  }
}
