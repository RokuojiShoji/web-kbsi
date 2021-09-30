import { Container, Table } from "react-bootstrap";

export default function Tabel() {
	return (
		<Container fluid="true">
      <Table className="table-responsive">
        <thead>
          <tr>
            <th> </th>
            <th>Asset</th>
            <th>Modal</th>
            <th>Simpanan</th>
            <th>Persediaan</th>
            <th>Piutang</th>
            <th>Akumulasi Penyaluran</th>
            <th>Penyaluran</th>
            <th>Jumlah Anggota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sayati</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
          </tr>
          <tr>
            <td>Arjasari</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
            <td>NULL</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}