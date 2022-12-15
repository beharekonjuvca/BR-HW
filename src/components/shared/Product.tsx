export const Product = (props: any) => {
  return (
    <div className="products-section-item">
      <div className="products-section-item__thumb">
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="products-section-item__content">
        <div className="products-section-item__headings">
          <h3 className="products-section-item__title">{props.title}</h3>

          <p className="products-section-item__description">
            {props.description}
          </p>
        </div>

        <span className="products-section-item__price">{props.price}€</span>
      </div>
    </div>
  );
};
