import ContentLoader from 'react-content-loader';

export const DogSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={1280}
      height={800}
      viewBox="1280 800"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="570" y="13" rx="2" ry="2" width="330" height="270" />
      <rect x="633" y="453" rx="0" ry="0" width="189" height="30" />
      <rect x="663" y="313" rx="0" ry="0" width="129" height="15" />
      <rect x="570" y="383" rx="2" ry="2" width="312" height="21" />
      <rect x="663" y="354" rx="0" ry="0" width="129" height="15" />
      <rect x="663" y="418" rx="0" ry="0" width="129" height="15" />
    </ContentLoader>
  );
};
