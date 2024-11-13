import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// component imports
import MyButton from "./components/MyButton";
import MyButton2 from "./components/MyButton2";
import LoginForm from "./pages/LoginForm";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  // const [count, setCount] = useState(0);
  let h1Text = "Welcome to my app!";
  let user = {
    name: "Aaron Varga",
    imageUrl: "./mil-photo.jpg",
  };
  let isLoggedIn = true; // or true, depending on your logic
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1>Counters that update separately</h1>
        <MyButton2 count={count} onClick={handleClick} />
        <MyButton2 count={count} onClick={handleClick} />
        <h2>{h1Text}</h2>
        <p>My name is {user.name}</p>
        <MyButton />
        <img
          className="photo"
          src={user.imageUrl}
          width={100}
          height={100}
          alt={"Photo of " + user.name}
        />
        <div>{content}</div>
        <ul>{listItems}</ul>
      </div>
    </>
  );
}
