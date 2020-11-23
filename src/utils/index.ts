import Md5 from 'md5';

export const getHash = () => {
  const timestamp = new Date().getTime();
  const hash = Md5(
    `${timestamp}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`
  );

  return { hash, timestamp };
};
