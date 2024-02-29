import PlacesOptionsList from '../places-options-list/places-options-list';

type SortingFormProps = {
  width: number;
  height: number;
}

function SortingForm({ width, height }: SortingFormProps): JSX.Element {
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width={width} height={height}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <PlacesOptionsList />
    </form>
  );
}

export default SortingForm;
