// Activity 5: Graceful Error Handling in Fetch

// Invalid URL
const InvalidURL = "https://not-a-valid-url.com";

// Task 8
fetch(InvalidURL)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP Error :: Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log("Data:", data))
  .catch((err) =>
    console.error(
      "Error while fetching data from given url, check it's correct or exists ::",
      err.message
    )
  );

// Task 9
const reqData = async () => {
  try {
    const res = await fetch(InvalidURL);
    if (!res.ok) {
      throw new Error(`HTTP Error :: Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(
      "Error while fetching data from given url, check it's correct or exists ::",
      error.message
    );
  }
};

reqData();
