type MapProps = {
  baseClassName?: string;
}

function Map({baseClassName = 'cities'}: MapProps): JSX.Element {
  return(
    <section className={`${baseClassName}__map map`} />
  );
}

export default Map;
