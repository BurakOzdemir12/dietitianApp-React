import React, { useEffect, useState } from "react";
import {
  facts,
  option,
  products,
} from "../../Components/Json/NutritionalItems";
import { useParams } from "react-router-dom";
import { Col, Dropdown, DropdownItem, Input, Row, Table } from "reactstrap";
import "../../Components/css/calculatorDetail.css";
import CountUp from "react-countup";

import {
  Chart as ChartJs,
  Tooltip,
  Title,
  ArcElement,
  Legend,
} from "chart.js/auto";
import { Chart, Doughnut, Pie } from "react-chartjs-2";
import a from "../../Components/Json/a.json";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Data = {
  labels: ["% Carb", " % Protein", " % Fat"],
  datasets: [
    {
      label: "",
      data: [21, 12, 21],
      backgroundColor: ["#008b8b", "rgb(255, 99, 132)", "rgb(255, 205, 86)"],
      hoverOffset: 1,
    },
  ],
};

const CalculatorDetail = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.name === productId);
  const {
    name,
    category,
    img,
    cal,
    prot,
    fat,
    carb,
    fibr,
    colest,
    sod,
    potass,
    cals,
    vitA,
    vitC,
    iron,
  } = product;

  const [selected, setSelected] = useState(option[0].valu);

  const [val, setVal] = useState(100);

  const [CalValue, setCalValue] = useState(cal);
  const [CarbValue, setCarbValue] = useState(carb);
  const [ProtValue, setProtValue] = useState(prot);
  const [FatValue, setFatValue] = useState(fat);

  const [FibrValue, setFibValue] = useState(fibr);
  const [ColestValue, setColValue] = useState(colest);
  const [SodiumValue, setSodValue] = useState(sod);
  const [potassiumValue, setPotasValue] = useState(potass);
  const [CalsValue, setCalsValue] = useState(cals);
  const [vitAValue, setvitAValue] = useState(vitA);
  const [vitCValue, setvitCValue] = useState(vitC);
  const [IronValue, setIronValue] = useState(iron);

  const selecthandle = (e) => {};

  const CalcHandling = (e) => {
    // setVal(e.target.value);

    const Gramage = e.target.value;

    console.log(Gramage + " " + e.target.value);
    setSelected(e.target.valu);
    setVal(Gramage);

    setCalValue(Math.round(cal * e.target.value) / 100);
    setCarbValue(Math.round(carb * e.target.value) / 100);
    setProtValue(Math.round(prot * e.target.value) / 100);
    setFatValue(Math.round(fat * e.target.value) / 100);

    setFibValue(Math.round(fibr * e.target.value) / 100);
    setColValue(Math.round(colest * e.target.value) / 100);
    setSodValue(Math.round(sod * e.target.value) / 100);
    setPotasValue(Math.round(potass * e.target.value) / 100);
    setCalsValue(Math.round(cals * e.target.value) / 100);
    setvitAValue(Math.round(vitA * e.target.value) / 100);
    setvitCValue(Math.round(vitC * e.target.value) / 100);
    setIronValue(Math.round(iron * e.target.value) / 100);
  };
  // const [counterOn, setCounterOn] = useState(false);

  // const MyComponent = () => <CountUp isCounting end={1320} duration={3.2} />;

  return (
    <div>
      <Row noGutters>
        <Col xs={12} sm={12} md={0} lg={0} xl={2}></Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={8}>
          <div className="" style={{ height: "auto" }}>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <div className="d-flex  align-items-center">
                <div className="imgCont d-flex mx-2">
                  <img className="Pimg px-0" src={img}></img>
                </div>
                <div className="mx-5">
                  <h1>{name}</h1>
                  <span style={{ fontWeight: "bolder" }}>{val} gr</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="inp d-flex">
                  <div className=" inp d-inline-block">
                    <Input
                      onChange={CalcHandling}
                      typeof="number"
                      type="text"
                      placeholder="100"
                      maxLength={4}
                      className=" mx-2 valueInput"
                    ></Input>
                  </div>
                  <div className="valueType d-flex">
                    <select value={selected} onChange={CalcHandling}>
                      {option.map((option) => (
                        <option key={option.valu} value={option.valu}>
                          {option.text} {option.gramValue}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </Col>
            <Row noGutters>
              <Col xs={11} sm={11} md={12} lg={12} xl={12}>
                <div className="Cal-Carb-Prot-Fat  mt-5  align-items-center d-flex mb-5 ">
                  <div className="pie ">
                    <Pie className="pie" data={Data}></Pie>
                  </div>

                  <div className="Macro d-flex  ">
                    <div className=" px-1 text-center num">
                      <span
                        style={{ color: "brown", fontFamily: "cursive" }}
                        className="d-block"
                      >
                        Calorie
                      </span>
                      <span
                        style={{ fontWeight: "bolder" }}
                        className=" d-block"
                      >
                        <CountUp isCounting end={CalValue} duration={1.2} />

                        <span> gr</span>
                      </span>
                      <span className="d-block"></span>
                    </div>

                    <div className="px-1 text-center">
                      <span
                        style={{ color: "darkcyan", fontFamily: "cursive" }}
                        className="d-block"
                      >
                        Carbohydriate
                      </span>
                      <span
                        style={{ fontWeight: "bolder" }}
                        className="d-block"
                      >
                        <CountUp isCounting end={CarbValue} duration={1.2} />{" "}
                        <span> gr</span>
                      </span>
                      <span className="d-block">
                        <span></span>
                      </span>
                    </div>
                    <div className="px-1 text-center">
                      <span
                        style={{ color: "red", fontFamily: "cursive" }}
                        className="d-block"
                      >
                        Protein
                      </span>
                      <span
                        style={{ fontWeight: "bolder" }}
                        className="d-block"
                      >
                        <CountUp isCounting end={ProtValue} duration={1.2} />{" "}
                        <span> gr</span>
                      </span>
                      <span className="d-block">
                        <span></span>
                      </span>
                    </div>
                    <div className="px-1 text-center">
                      <span
                        style={{
                          color: "orange",
                          fontFamily: "cursive",
                          opacity: "1",
                        }}
                        className="d-block"
                      >
                        Fat
                      </span>
                      <span
                        style={{ fontWeight: "bolder" }}
                        className="d-block"
                      >
                        <CountUp isCounting end={FatValue} duration={1.2} />{" "}
                        <span> gr</span>
                      </span>
                      <span className="d-block">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={12} sm={12} md={0} lg={0} xl={2}></Col>

        <Row noGutters>
          <Col xs={12} sm={12} md={0} lg={0} xl={2}></Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={8}>
            {" "}
            <div className="fullpage">
              <h3 className="mx-3 py-5 mt-1">Nutritional Facts</h3>
              <Table striped>
                <thead>
                  <tr>
                    <th></th>
                    <th> </th>
                    <th>100 gr</th>
                    <th>
                      {" "}
                      <CountUp isCounting end={val} duration={1.2} /> gr
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {facts.map((fact) => (
                    <tr>
                      <th scope="row">{fact.name} (g) </th>
                      <td></td>
                      <td>{carb}</td>
                      <td>
                        <CountUp isCounting end={CarbValue} duration={1.2} />
                      </td>
                    </tr>
                  ))}<br></br> */}
                  <tr>
                    <th scope="row">Carbohydrates (g) </th>
                    <td></td>
                    <td>{carb}</td>
                    <td>
                      <CountUp isCounting end={CarbValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Protein (g)</th>
                    <td></td>
                    <td>{prot}</td>
                    <td>{ProtValue}</td>
                  </tr>
                  <tr>
                    <th scope="row">Fat (g)</th>
                    <td></td>
                    <td>{fat}</td>
                    <td>{FatValue}</td>
                  </tr>

                  <tr>
                    <th scope="row">Fibre (g)</th>
                    <td></td>
                    <td>{fibr} </td>
                    <td>{FibrValue}</td>
                  </tr>
                  <tr>
                    <th scope="row">cholesterol (mg)</th>
                    <td></td>
                    <td>{colest}</td>
                    <td>{ColestValue}</td>
                  </tr>
                  <tr>
                    <th scope="row">Sodium (mg)</th>
                    <td></td>
                    <td>{sod}</td>
                    <td>{SodiumValue}</td>
                  </tr>
                  <tr>
                    <th scope="row">Potassium (mg)</th>
                    <td></td>
                    <td>{potass}</td>
                    <td>{potassiumValue}</td>
                  </tr>
                  <tr>
                    <th scope="row">Calcium (mg)</th>
                    <td></td>
                    <td>{cals}</td>
                    <td>{CalsValue}</td>
                  </tr>
                  <tr>
                    <th scope="row">Vitamin A (iu)</th>
                    <td></td>
                    <td>{vitA}</td>
                    <td>{vitAValue}</td>
                  </tr>
                  <tr>
                    <th scope="row">Vitamin C (mg)</th>
                    <td></td>
                    <td>{vitC}</td>
                    <td>{vitCValue}</td>
                  </tr>
                  <tr>
                    <th scope="row">Demir</th>
                    <td></td>
                    <td>{iron}</td>
                    <td>{IronValue}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xs={12} sm={12} md={0} lg={0} xl={2}></Col>
        </Row>
      </Row>
    </div>
  );
};

export default CalculatorDetail;
