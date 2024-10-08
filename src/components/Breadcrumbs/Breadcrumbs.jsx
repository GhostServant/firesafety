import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';
import priceList from '../../data/priceList';
import { services } from '../../data/servicesList'; // Импортируем список услуг

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    'catalog': 'Каталог',
    'services': 'Услуги',
    'contacts': 'Контакты',
  };

  const getCategoryName = (categoryPath) => {
    const category = priceList.find(cat => cat.linkTo === categoryPath);
    return category ? category.category : '';
  };

  const getItemName = (categoryPath, itemId) => {
    const category = priceList.find(cat => cat.linkTo === categoryPath);
    if (category) {
      const item = category.items.find(item => item.id === parseInt(itemId));
      return item ? item.name : '';
    }
    return '';
  };

  const getServiceName = (servicePath) => {
    const service = services.find(s => s.linkTo === `/services/${servicePath}`);
    return service ? service.name : '';
  };

  return (
    <nav className="breadcrumbs">
      {pathnames.length > 0 && <Link to="/">Главная</Link>}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        let breadcrumbName = breadcrumbNameMap[name] || name;

        if (pathnames[0] === 'catalog' && index === 1) {
          const categoryPath = `/${pathnames.slice(0, index + 1).join('/')}`;
          breadcrumbName = getCategoryName(categoryPath);
        }

        if (pathnames[0] === 'catalog' && index === 2) {
          const categoryPath = `/${pathnames.slice(0, index).join('/')}`;
          breadcrumbName = getItemName(categoryPath, name);
        }

        if (pathnames[0] === 'services' && index === 1) {
          breadcrumbName = getServiceName(name);
        }

        return isLast ? (
          <span key={name}>{breadcrumbName}</span>
        ) : (
          <Link key={name} to={routeTo}>
            {breadcrumbName}
          </Link>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;