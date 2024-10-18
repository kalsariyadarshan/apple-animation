export default (props: any) => (
  <div
    className={'section-content'}
    style={{
      height: `100%`,
      margin: `0 auto`,
    }}
  >
    {props.children}
  </div>
);
