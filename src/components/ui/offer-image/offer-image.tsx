type OfferImageProps = {
  src: string;
};

function OfferImage({ src }: OfferImageProps): JSX.Element {
  return(
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={src}
        alt="Photo studio"
      />
    </div>
  );
}

export default OfferImage;
