import { useState } from 'react';
import PlacesOptionsList from '../places-options-list/places-options-list';
import { SortingOption } from '../../../types/types';

type SortingFormProps = {
  width: number;
  height: number;
  currentOption: string;
  onOptionClick: (option: SortingOption) => void;
}

function SortingForm({ width, height, currentOption, onOptionClick }: SortingFormProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

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
        onOptionClick={(option) => {
          onOptionClick(option);
          setIsOpen(false);
        }}
        isOpen={isOpen}
      />
    </form>
  );
}

export default SortingForm;
