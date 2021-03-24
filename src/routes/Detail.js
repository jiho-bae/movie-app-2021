import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      return (
        <div className="detail">
          <img src={state.poster} alt={state.title} title={state.title} />
          <div className="detail__data">
            <span className="detail__title">{state.title}</span>
            <span className="detail__year">{state.year}</span>
            <ul className="detail__genres">
              {state.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="detail__summary">{state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
