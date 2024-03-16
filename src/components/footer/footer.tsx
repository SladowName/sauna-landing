import './footer.scss'

interface FooterProps {

}

export function Footer(props: FooterProps) {
  return (
    <footer>
     <div>
       © {(new Date()).getFullYear()} Название сайта
     </div>
    </footer>
  );
};
