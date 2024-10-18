export default (props: any) => {
  const { children } = props;
  return (
    <div
      className={
        'sticky-content h-[1100px] md:h-[1380px] lg:h-[1600px] xl:h-[1000px]'
      }
      style={{
        top: 0,
        position: `sticky`,
        zIndex: 100,
      }}
    >
      {children}
    </div>
  );
};
