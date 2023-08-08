async function fetchRandomUser(url, callBack) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network Status - NOT OK");
    }
    let data;
    // setTimeout(async()=>{data = await response.json();},2000);
    // due to async nature of setTimeout callback(undefined) runs
    console.log("This is running now!");
    callBack(data);
  } catch (err) {
    console.log(err);
    return null; // Return an error value or handle the error here
  }
}

const displayData = (data) => console.log(data);

fetchRandomUser("https://jsonplaceholder.typicode.com/users/1", displayData);

// async function fetchData() {
//     await fetchRandomUser('https://jsonplaceholder.typicode.com/userdsfsads/1', displayData);
// }
// fetchData()

// Other Real world example of callback function lies
// event handling,http request,
