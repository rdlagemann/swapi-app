import Ul from "./Ul.styled";
import Li from "./Li.styled";

export default {
  title: "ui/List",
  component: Ul,
  subcomponents: { Li },
};

const ITEMS = [
  "First item description",
  "Second item description",
  "Last item description",
];

export const WithContent = () => (
  <Ul>
    {ITEMS.map((text, i) => (
      <Li key={i}>{text}</Li>
    ))}
  </Ul>
);

export const Shadow = () => (
  <Ul shadow>
    {ITEMS.map((text, i) => (
      <Li key={i}>{text}</Li>
    ))}
  </Ul>
);

export const Hoverable = () => (
  <Ul>
    {ITEMS.map((text, i) => (
      <Li hover key={i}>
        {text}
      </Li>
    ))}
  </Ul>
);

export const Empty = (...args) => <Ul {...args} />;
