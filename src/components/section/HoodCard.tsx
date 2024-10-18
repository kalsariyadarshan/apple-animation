const HoodCard = ({
  img,
  headding,
  description,
  color,
}: {
  img: string;
  headding: string;
  description: string;
  color: string;
}) => {
  return (
    <div className="">
      <div className="flex h-full flex-col gap-3 rounded-lg">
        <div className="flex items-center md:mb-3">
          <img
            src={`assets/images/${img}`}
            className={`w-16 rounded-full `}
            style={{ borderWidth: 1, borderColor: color }}
            alt=""
          />
        </div>
        <h3 className="text-lg font-bold text-white md:text-xl md:leading-7">
          {headding}
        </h3>

        <p className="text-base font-medium text-gray-100 md:text-lg md:leading-7">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HoodCard;
