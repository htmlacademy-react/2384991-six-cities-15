import { useState } from 'react';
import PlacesOptionsList from '../places-options-list/places-options-list';

type SortingFormProps = {
  width: number;
  height: number;
}

function SortingForm({ width, height }: SortingFormProps): JSX.Element {
  const [currentOption, setCurrentOption] = useState('Popular');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setCurrentOption(option);
    setIsOpen(false);
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleList}>
        {currentOption}
        <svg className="places__sorting-arrow" width={width} height={height}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <PlacesOptionsList
        currentOption={currentOption}
        onOptionClick={handleOptionClick}
        isOpen={isOpen}
      />
    </form>
  );
}

export default SortingForm;
