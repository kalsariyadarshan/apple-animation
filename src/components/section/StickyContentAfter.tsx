export default (props: any) => {
  const { children } = props;
  return (
    <div
      className={'sticky-content__below'}
      style={{
        right: 0,
        left: 0,
        bottom: 0,
        position: `absolute`,
        zIndex: 3,
      }}
    >
      {children}
    </div>
  );
};
