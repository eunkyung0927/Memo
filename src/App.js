import "./App.css";
import Registration from "./components/Registration.tsx";
import Reviews from "./components/memoList.tsx";
import React, { useState, useEffect, useCallback, useRef } from "react";

function App() {
  //정렬 함수 (점수+제목)
  const sortFunc = (objArr) => {
    // eslint-disable-next-line array-callback-return
    return objArr.sort(function (a, b) {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;

      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
    });
  };
  //초기 데이터 localstorage에 저장 : data가 없는 경우에만 initial Data저장
  const [data, setData] = useState([]);

  useEffect(() => {
    let originData = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    setData(sortFunc(originData));
    localStorage.setItem("data", JSON.stringify(sortFunc(originData)));
  }, []);

  const nextId = useRef(5);
  const onRegister = useCallback(
    (values) => {
      let newData = data.concat(Object.assign(values, { id: nextId.current }));
      setData(newData);
      localStorage.setItem("data", JSON.stringify(sortFunc(newData)));
      nextId.current += 1;
    },
    [data]
  );

  return (
    <div className="App">
      <Registration onRegister={onRegister} />
      <Reviews data={data} />
    </div>
  );
}

export default App;
