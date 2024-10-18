const Card = ({
  img,
  headding,
  description,
}: {
  img: string;
  headding: string;
  description: string;
}) => {
  return (
    <div className="mx-auto h-full max-w-[387px] overflow-hidden rounded-2xl bg-base-185">
      <img
        className="object-cover object-center"
        src={`assets/images/WhatSetsUsApart/${img}`}
        alt={img}
      />
      <div className="flex flex-col gap-1 p-6">
        <h3 className="text-xl font-bold leading-7 text-base-75">{headding}</h3>
        <p className="text-[18px] font-medium leading-6 text-gray-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
