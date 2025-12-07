const ShoeCard = ({ imgURL, changeBigShowImage, bigShowImage }) => {
  const handleClick = () => {
    if (bigShowImage !== imgURL.bigShoe) {
      changeBigShowImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShowImage === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
      role="button"
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-28 sm:h-28 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
