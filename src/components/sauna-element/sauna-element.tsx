import './sauna-element.scss'

interface SaunaElementProps {
  index: number;
  src: string;
}

export function SaunaElement({index, src}: SaunaElementProps) {
  return (
    <div className={`${index % 2 === 0 ? "reverse" : ""} saunaElementWrapper`}>
      <img src={src}/>
      <div>Text</div>
    </div>
  );
}