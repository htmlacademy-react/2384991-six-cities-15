type RatingStarProps = {
  id: string;
  ratingValue: number;
  title: string;
  onChange: () => void;
  checked: boolean;
  disabled: boolean;
};

function RatingStar({ id, ratingValue, title, onChange, checked, disabled }: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ratingValue}
        id={id}
        type="radio"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
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
