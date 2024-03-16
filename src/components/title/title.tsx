import './title.scss'

interface TitleProps {

}

export function Title(props: TitleProps) {
  return (
    <div className="titleWrapper">
      <div className="content">
        <div className="portoflio">
          Портфолио
        </div>
        <div>
          Наши бани уже нашли своих хозяев
        </div>
      </div>
    </div>
  );
}