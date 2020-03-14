import React, { useEffect, useState } from "react";
import * as loadingData from "./loading.json";
import * as successData from "./success.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "./App.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: successData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          setLoading(true);
          setTimeout(() => {
            setSuccess(true);
          }, 1000);
        });
    }, 1500);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!success ? (
          <FadeIn>
            <div style={{ display: "flex" }}>
              <h1>fetching</h1>
              {!loading ? (
                <Lottie options={defaultOptions} height={210} width={210} />
              ) : (
                <Lottie options={defaultOptions2} height={210} width={210} />
              )}
            </div>
          </FadeIn>
        ) : (
          <h1>Fetch Success</h1>
        )}
      </header>
    </div>
  );
}

export default App;