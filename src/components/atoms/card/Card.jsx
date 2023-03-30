import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;

// box-shadow: #ddd 0px(x軸) 0px　(y軸) 4px(ボカシの距離) 2px(広げるか);
// border-radius(角を丸くする)
//padding(内側のスペース)
