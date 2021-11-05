import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyCard } from "./components/MyCard";
// import uuid from "react-uuid";

import { useState, useEffect, useCallback } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log("my error is " + error);
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  let content = <p>Found no Users.</p>;

  if (posts.length > 0) {
    // content = posts.map((post) => <MyCard content={post} key={uuid()} />);
    content = posts.map((post) => <MyCard content={post} key={post.id} />);
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  
  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <Container style={{ marginTop: "5rem" }}>
      <div className="row">{content}</div>
    </Container>
  );
}

export default App;
