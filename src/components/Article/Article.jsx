import "./Article.css";

export default function Article() {
  return (
    <div className="article">
      <h2>Fun facts about React</h2>
      <ul>
        <li>
          <div className="marker"></div>Was first released in 2013
        </li>
        <li>
          <div className="marker"></div>Was originally created by Jordan Walke
        </li>
        <li>
          <div className="marker"></div>Has well over 200K stars on GitHub
        </li>
        <li>
          <div className="marker"></div>Is maintained by Meta
        </li>
        <li>
          <div className="marker"></div>Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </div>
  );
}
