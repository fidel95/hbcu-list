import list from "./../api/list.json"

const HbcuList = list;

export default function Table() {
  return (
  <div class="container is-widescreen">

    <table class="table">
    <thead>
      <tr>
        <th>School Name</th>
        <th>City</th>
        <th>State</th>
        <th>Founded</th>
        <th>Type</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
      <th>School Name</th>
        <th>City</th>
        <th>State</th>
        <th>Founded</th>
        <th>Type</th>
      </tr>
    </tfoot>
    <tbody>
    
    {HbcuList.map(s => 
      s.School === "Delaware State University" ? (
      <tr class="is-selected">
      <th>{s.School}</th>
      <td>{s.City}</td>
      <td>{s["State/Territory"]}</td>
      <td>{s.Founded}</td>
      <td>{s.Type}</td>
    </tr>) : 
(
      <tr>
      <th>{s.School}</th>
      <td>{s.City}</td>
      <td>{s["State/Territory"]}</td>
      <td>{s.Founded}</td>
      <td>{s.Type}</td>
    </tr>
)
 )}
      </tbody>
      </table>
    </div>

  )
}
