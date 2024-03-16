import './footer.scss'

export function Footer() {
  return (
    <footer>
     <div>
       © {(new Date()).getFullYear()} Название сайта
     </div>
    </footer>
  );
}
