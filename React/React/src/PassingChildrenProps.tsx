import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PassingChildrenProps = ({ children }: Props) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};

export default PassingChildrenProps;
