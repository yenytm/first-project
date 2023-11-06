import "./hero2.css";

export function HeroTwo() {
  return (
    <div className="heroTwo">
      <div className="topHero2">
        <h2>Book Recommendations</h2>
      </div>

      <div className="bottomHero2">
        <div>
          <span className="bookItemRec">
            <a href="">
              <img
                className="bookRecs"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
                alt=""
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis enim non egestas luctus. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Ut id
              fringilla dolor. Phasellus cursus ipsum at neque gravida mollis.{" "}
            </p>
          </span>

          <span className="bookItemRec">
            <a href="">
              <img
                className="bookRecs"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg"
                alt=""
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis enim non egestas luctus. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Ut id
              fringilla dolor. Phasellus cursus ipsum at neque gravida mollis.{" "}
            </p>
          </span>
          <span className="bookItemRec">
            <a href="">
              <img
                className="bookRecs"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg"
                alt=""
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis enim non egestas luctus. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Ut id
              fringilla dolor. Phasellus cursus ipsum at neque gravida mollis.{" "}
            </p>
          </span>

          <span className="bookItemRec">
            <a href="">
              <img
                className="bookRecs"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465563623i/27883214.jpg"
                alt=""
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis enim non egestas luctus. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Ut id
              fringilla dolor. Phasellus cursus ipsum at neque gravida mollis.{" "}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;