type RatingStarProps = {
  id: string;
  ratingValue: number;
  title: string;
  onChange: () => void;
  checked: boolean;
};

function RatingStar({ id, ratingValue, title, onChange, checked }: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={ratingValue}
        id={id}
        type="radio"
        onChange={onChange}
        checked={checked}
      />
      <label
        htmlFor={id}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
