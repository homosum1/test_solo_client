import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./mainPage.scss";

export interface Item {
    Name: string;
    ID: number;
    Price: number;
    Quantity: number;
    Icon: string;
  }

export const MainPage = () => {
  const currentURL = window.location.href;

  const prefix = "https://serverebiznestest-5jqykmrd5a-lm.a.run.app";

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch(`${prefix}/getAll`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mainPage ">
      <div>
        <h2>Aplikacja testowa działająca na:</h2>
        <h3>{currentURL}</h3>
        <h3>Dane pobrane z serwera pod adresem: {prefix}</h3>
        <ul>
          {items.map((item) => (
            <li key={item.ID}>
              {item.Icon} {item.Name} - ${item.Price} (Quantity: {item.Quantity}
              )
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
