async function fetchUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const userData = await response.json();

    console.log(`User Name: ${userData.name}`);
  } catch (error) {
    // if (error.message === "User not found") {
        console.log("Network error occurred");
    // } else {
    //     console.log("Network error occurred");
    // }
  }
}
fetchUserData(999); // Should log "User not found" error in the console
fetchUserData(1); // Should fetch and log the name of the user with ID 1
