import { useEffect, useState } from "react";
import SpinButton from "./button";
import "./wheel.css";

const Wheel = () => {
  const [wheelInfo, setWheelInfo] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_PATH}/wheel`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => setWheelInfo(data));
  }, []);

  return (
    <>
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Logo</th>
          <th>Prizes</th>
          <th>Color1</th>
          <th>Color2</th>
        </tr>

        <tr className="item" key={wheelInfo?.id}>
          <td className="itemDisplay">{wheelInfo?.id}</td>
          <td className="itemDisplay">{wheelInfo?.name}</td>
          <td className="itemDisplay">{wheelInfo?.logo}</td>

          <td>
            {wheelInfo?.prizes?.map((prize) => {
              return (
                <div key={prize.id}>
                  <span>Name: {prize.name}</span>
                  <span> Percentage: {prize.percentage}</span>
                  <span> Image: {prize.image}</span>
                </div>
              );
            })}
          </td>

          <td className="itemDisplay">{wheelInfo?.config?.main_color}</td>
          <td className="itemDisplay">{wheelInfo?.config?.secondary_color}</td>
        </tr>
      </table>

      <div className="sideBySide">
        <SpinButton
          colors={[
            wheelInfo?.config?.main_color,
            wheelInfo?.config?.secondaryColor,
          ]}
        />
      </div>
    </>
  );
};

export default Wheel;
