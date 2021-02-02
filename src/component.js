const Tab = ({ i }) => {
  return (
    <table class="table is-bordered mb-3">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>{i.name}</td>
          <td>{i.gender}</td>
          <td>{i.age}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tab;
