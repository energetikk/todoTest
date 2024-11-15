

export const Footer = ({task}) => {
    return (
        <footer>
          <nav>
            <ul className="flex flex-row gap-3 ">
              <li className="bg-red-300"><a href="/all">Все</a></li>
              <li className="bg-red-300"><a>Активные</a></li>
              <li className="bg-red-300"><a>Завершенные</a></li>
            </ul>
          </nav>
        </footer>
    )
}