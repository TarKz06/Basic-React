import "./MangaItem.css";
function MangaItem(props) {
  const { manga } = props;
  return (
    <div className="manga-item">
      <img src={manga.link} />
      <h4>{manga.title}</h4>
    </div>
  )
}

export default MangaItem;
