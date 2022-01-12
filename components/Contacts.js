import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contacts() {
  return (
    <div className="grid-cols-2 xl:grid-cols-4 pt-4 pb-10 space-y-3 bg-gray-100 text-gray-600 border-t-2 py-6">
      <div className="ml-3 text-xs md:text-sm mb-6">
        <p className="space-x-3 pb-3 ml-3">&copy; 2021 Airbnb, Inc.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 cursor-pointer ml-3">
          <li>Конфиденциальность</li>
          <li>Условия</li>
          <li>Карта сайта</li>
          <li>Реквизиты компании</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:justify-items-center sm:grid-cols-2 ml-4">
        <div className="flex flex-wrap text-xs cursor-pointer md:text-sm pb-2">
          <LanguageIcon className="h-4" />
          <p>Русский (RU)</p>
        </div>

        <div className="flex flex-wrap text-xs cursor-pointer md:text-sm">
          <CurrencyRubleIcon className="h-4" />
          <p>RUB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:justify-items-center sm:grid-cols-3 ml-4 pt-4">
        <FacebookIcon className="h-4 mb-3 cursor-pointer" />
        <TwitterIcon className="h-4 mb-3 cursor-pointer" />
        <InstagramIcon className="h-4 cursor-pointer" />
      </div>
    </div>
  );
}

export default Contacts;
