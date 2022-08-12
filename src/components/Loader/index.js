import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
    />
  );
};

export const LoaderBtn = () => {
  return (
    <Oval
      height="15"
      width="15"
      radius="12"
      color="red"
      ariaLabel="three-dots-loading"
      wrapperStyle
    />
  );
};
