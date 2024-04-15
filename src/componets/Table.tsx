import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const Table = () => {
  const [tableData, setTableData] = useState<any>([]);
  const tableUrl =
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100";

  const abc = async () => {
    await axios.get(tableUrl).then((res) => {
      const a = res.data.results;
      setTableData(a);
    });
  };

  useEffect(() => {
    abc();
  }, []);
  console.log(tableData);
  return (
    <>
      <div>
        <h2>City Table</h2>
        {tableData.length > 0 && (
          <table
            style={{
              width: "100%",
            }}
          >
            <tr>
              <th>City Name</th>
              <th>Population</th>
              <th>Timezone</th>
              <th>Country code</th>
            </tr>
            {tableData.map((i: any) => {
              return (
                <tr>
                  <td>{i.name}</td>
                  <td>{i.population}</td>
                  <td>{i.timezone}</td>
                  <td>{i.country_code}</td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};
export default Table;
