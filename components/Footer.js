function Footer() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-y-7 pl-8 py-10 bg-gray-100 text-gray-600 ">
      <div className="text-xs text-gray-800">
        <h5 className="mb-4 font-bold">Поддержка</h5>
        <ul className="space-y-2">
          <li>Центр помощи</li>
          <li>Информация о безопасности</li>
          <li>Отмена в период пандемии</li>
          <li>Действия Airbnb во время пандемии</li>
          <li>Доступная среда</li>
          <li>Сообщить о проблеме в районе</li>
        </ul>
      </div>
      <div className="text-xs text-gray-800">
        <h5 className="mb-4 font-bold">Сообщество</h5>
        <ul className="space-y-2">
          <li>
            Airbnb.org: жилье для
            <br />
            пострадавших от бедствия
          </li>
          <li>Помощь афганским беженцам</li>
          <li>Многообразие и принятие</li>
          <li>Борьба с дискриминацией</li>
        </ul>
      </div>
      <div className="text-xs text-gray-800">
        <h5 className="mb-4 font-bold">Прием гостей</h5>
        <ul className="space-y-2">
          <li>Стать хозяином</li>
          <li>AirCover: защита для хозяев</li>
          <li>Ресурсы для хозяев</li>
          <li>Форум сообщества</li>
          <li>Ответственный прием гостей</li>
        </ul>
      </div>
      <div className="text-xs text-gray-800">
        <h5 className="mb-4 font-bold">О нас</h5>
        <ul className="space-y-2">
          <li>Пресс-центр</li>
          <li>Подробнее о новых функциях</li>
          <li>Письмо от основателей Airbnb</li>
          <li>Карьера в Airbnb</li>
          <li>Для инвесторов</li>
          <li>Airbnb Luxe</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
