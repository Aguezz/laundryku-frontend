import AccountLinks from './AccountLinks';
import Navbar from '../../../components/Navbar';

function EmployeeAccount(): JSX.Element {
  return (
    <div className="pt-14">
      <Navbar link="/employee" title="Pengaturan" />
      <AccountLinks />
    </div>
  );
}

export default EmployeeAccount;
