import Navbar from '../../../components/Navbar';

import TableJemput from './TableJemput';

export default function EmployeeJemput(): JSX.Element {
  return (
    <div className="pt-16">
      <Navbar link="/employee" title="Penjemputan" />

      <TableJemput />
    </div>
  );
}
