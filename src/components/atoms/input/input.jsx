import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
//他の要素で使用する場合は、コンポーネントの役割は、inputの共通な
//デザインを持つこととプレイスフォルダーを直接受けっとて動的に変更する
//propsからプレイスフォルダーを受け取って、プレイスフォルダーに適用できるようにする。
