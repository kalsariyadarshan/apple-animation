import StickyContent from './StickyContent';
import StickyContentAfter from './StickyContentAfter';
import StickyContentBefore from './StickyContentBefore';

export default (props: any) => {
  const { calHeights, children, before, primary, after } = props;

  return (
    <div
      className={'sticky-container'}
      style={{
        position: `relative`,
        height: `auto`,
        minHeight: calHeights && calHeights,
      }}
      {...props}
    >
      {before && <StickyContentBefore>{before}</StickyContentBefore>}
      <StickyContent>{children || primary}</StickyContent>
      {after && <StickyContentAfter>{after}</StickyContentAfter>}
    </div>
  );
};
