import "/Users/maxime/Desktop/project-1/src/components/collection-item/collectionItem.styles.scss";

const CollectionItem = ({ item }) => {
  return (
    <div key={item.id} className="collection-item">
      <div className="collection-item">
        <div
          style={{ backgroundImage: `url(${item.imageUrl})` }}
          className="image"
        />
        <div className="collection-footer">
          <span className="name">{item.name}</span>
          <span className="price">{item.price}$</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
