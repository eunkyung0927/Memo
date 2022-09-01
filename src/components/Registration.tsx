import React, { useState, useCallback } from "react";

function Registration({ onRegister }) {
  const [values, setValues] = useState({ title: "", comment: "", score: 1 });
  const { title, comment, score } = values;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onRegister(values);
    //TODO:입력창 초기화
    console.log(values);
    let clearData = { title: "", comment: "", score: 1 };
    setValues({ ...clearData });
    console.log(values);
  };

  const handleInputChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      setValues({ ...values, [id]: value });
    },
    [values]
  );

  const handleSelectChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      setValues({ ...values, [id]: Number(value) });
    },
    [values]
  );

  return (
    <form id="register" onSubmit={handleSubmit}>
      <h1> 새 메모 추가</h1>
      <div>
        <p>제목</p>
        <input
          id="title"
          type="text"
          className="input-register"
          placeholder="제목을 입력해 주세요"
          onChange={handleInputChange}
          required={true}
          value={title}
        ></input>
      </div>
      <div>
        <p>내용</p>
        <textarea
          id="comment"
          className="textarea-comment"
          placeholder="내용을 입력해 주세요"
          onChange={handleInputChange}
          required={true}
          value={comment}
        ></textarea>
      </div>
      <div>
        <p> 중요도 </p>
        <select
          id="score"
          className="select"
          onChange={handleSelectChange}
          value={score}
        >
          <option value="1">1점</option>
          <option value="2">2점</option>
          <option value="3">3점</option>
          <option value="4">4점</option>
          <option value="5">5점</option>
        </select>
      </div>
      <button className="btn-register" type="submit">
        등록
      </button>
    </form>
  );
}
export default Registration;
