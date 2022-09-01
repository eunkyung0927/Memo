import React, { useState } from "react";

function Reviews({ data }) {
  const [keywordInput, setKeywordInput] = useState("");
  const filtered = data.filter((dataList) => {
    return dataList.title.toUpperCase().includes(keywordInput.toUpperCase());
  });

  const onKeywordChange = (e) => {
    setKeywordInput(e.target.value);
  };

  return (
    <>
      <div id="search">
        <h1>검색</h1>
        <input
          type="text"
          className="input search"
          onChange={onKeywordChange}
          placeholder="제목을 입력해 주세요"
        ></input>
      </div>
      <div id="reviews">
        <h1>메모 리스트</h1>
        <ul>
          {keywordInput === ""
            ? data.map((ele) => (
                <li key={ele.id}>
                  <div className="review-box">
                    <h1>{ele.title}</h1>
                    <p>{ele.comment}</p>
                    <div className="starList">
                      {Array(ele.score)
                        .fill(undefined)
                        .map((_, key) => (
                          <div key={key} className={"star"}></div>
                        ))}
                    </div>
                  </div>
                </li>
              ))
            : filtered.map((ele) => (
                <li key={ele.id}>
                  <div className="review-box">
                    <h1>{ele.title}</h1>
                    <p>{ele.comment}</p>
                    <div className="starList">
                      {Array(ele.score)
                        .fill(undefined)
                        .map((_, key) => (
                          <div key={key} className={"star"}></div>
                        ))}
                    </div>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
}
export default Reviews;
