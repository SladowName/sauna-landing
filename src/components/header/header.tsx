import './header.scss'

interface HeaderProps {
  position: number;
}


export function Header(props: HeaderProps) {

  return (
    <header className={props.position >= 360 ? 'transperent' : ''}>
      <div>Название сайта</div>
      <div>Портфолио</div>
      <div className="contact">
        <div>+375 25 777 77 77</div>
        <div className="instagram">
          <svg fill="#000000" width="16px" height="16px" viewBox="0 0 256 256" id="Flat"
               xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"/>
            </g>

          </svg>
        </div>
      </div>
    </header>
  );
}