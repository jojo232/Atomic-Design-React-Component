import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;

//コンポーネント分割、特にアトミックデザインで分割していく時に
//大事な考え方になるときは、コンポーネントの役割はなんなのかを考える
//プライマリーボタンのコンポーネントとは画面の主要となるボタンのデザインを提供して
//いろんなところで使えるようにするので、実際の中で使えるラベルはpropsで受けっとて
//どんな画面でも違う言葉でボタンを生成できる
//propsとして受けっと中にchildrenを受けとうと良い。
//<PrimaryButton>>あああ<//PrimaryButton>親要素から色々と受け取れるコンポーネントを使用できる
