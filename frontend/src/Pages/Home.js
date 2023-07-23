import React from "react";

function Home() {


  return (
    <div className="App">
      <div className="background-image">
        <div className="center-text">PET SITTER LIST</div>
        <div className="card-container">
          <div className="card">
            <img src="./background1.jpg" alt="사진을 넣어주세요" className="card-image" />
            <h3>Card 1</h3>
            <p>Card 1 내용</p>
          </div>
          <div className="card">
            <img src="./background1.jpg" alt="사진을 넣어주세요" className="card-image" />
            <h3>Card 2</h3>
            <p>Card 2 내용</p>
          </div>
          <div className="card">
            <img src="./background1.jpg" alt="사진을 넣어주세요" className="card-image" />
            <h3>Card 3</h3>
            <p>Card 3 내용</p>
          </div>
          <div className="card">
            <img src="./background1.jpg" alt="사진을 넣어주세요" className="card-image" />
            <h3>Card 4</h3>
            <p>Card 4 내용</p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Home;