export default async function login(username, password) {
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

    // just holding the below before I get the auth set up.
    //  Will add user info to the auth context provider after login success
    const data = await rawResponse.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
