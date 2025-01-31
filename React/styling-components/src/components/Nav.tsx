interface Props {
  cartItemsCount: number;
}

const Nav = ({ cartItemsCount }: Props) => {
  return <div>Nav:{cartItemsCount}</div>;
};

export default Nav;
