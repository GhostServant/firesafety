import styles from './CompanyInfo.module.scss';

const CompanyInfo = ({ description }) => {
  return (
    <div className={styles.companyInfoContainer}>
      <h3>О компании</h3>
      <p>{description}</p>
    </div>
  );
};

export default CompanyInfo;