import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import fathima from "../assets/fathima.jpg";

export default function CalenderHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePreMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(dayjs().month());
  }
  return (
    <div>
      <center>
        <header>
          <a
            href="https://www.fathimashrine.com/"
            target="_blank"
            rel="noreferrer">
            <img src={fathima} alt="" />
          </a>
          <h1>Our Lady of Fatima Shrine</h1>
        </header>
      </center>

      <div class="same-line">
        <div class="on-the-left">
          <a
            className="nav-link"
            href="https://www.fathimashrine.com/"
            style={{ textdecoration: "inherit", fontSize: "92%" }}>
            <button
              className="border rounded py-2 px-4 mr-1 text-white"
              style={{
                backgroundColor: "rgba(44, 180, 220, 0.79)",
                bordercolor: "blue",
              }}>
              <span>Home</span>
            </button>
          </a>
        </div>
      </div>

      <div class="on-the-center">Krishnagiri,635001</div>
      <header
        className="py-2 flex items-center"
        style={{ paddingLeft: "4%", backgroundColor: "rgb(44 180 220 / 79%)" }}>
        <button onClick={handlePreMonth}>
          <span className="material-icons-outlined cursor-pointer text-white mx-2">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-white mx-2">
            chevron_right
          </span>
        </button>

        <button
          className="border rounded py-2 px-4 mr-1 text-white"
          onClick={handleReset}>
          Today
        </button>
        <h2
          className="ml-4 text-xl text font-bold text-white"
          style={{ paddingLeft: "4%" }}>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </header>
    </div>
  );
}
