import React, { useEffect, useState } from "react";
import {
  facts,
  option,
  products,
} from "../../Components/Json/NutritionalItems";
import { useParams } from "react-router-dom";
import { Col, Dropdown, DropdownItem, Input, Row, Table } from "reactstrap";
import "../calculator/calculatorDetail.css";
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
import useFetch from "../../hooks/useFetch";
import { urlFoods, urlMeasurements } from "../../endpoints";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Data = {
  labels: ["% Carb", " % Protein", " % Fat"],
  datasets: [
    {
      label: "",
      data: [21, 45, 98],
      backgroundColor: ["#008b8b", "rgb(255, 99, 132)", "rgb(255, 205, 86)"],
      hoverOffset: 1,
    },
  ],
};

const CalculatorDetail = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`${urlFoods}/${id}`);
  // console.log(data?.measurements);

  const measurementNames = data?.measurements?.map((measurement) => measurement.name);
// console.log(measurementNames);

  const [selected, setSelected] = useState(1);
  const [userInput, setUserInput] = useState(1);
  const [TotalGram, setTotalGram] = useState(1);



  const [CalValue, setCalValue] = useState(data?.kcal);
  const [CarbValue, setCarbValue] = useState(data?.carb);
  const [ProtValue, setProtValue] = useState(data?.protein);
  const [FatValue, setFatValue] = useState(data?.fat);

  const [FibrValue, setFibValue] = useState(data?.fibr);
  const [ColestValue, setColValue] = useState(data?.colest);
  const [SodiumValue, setSodValue] = useState(data?.sodium);
  const [potassiumValue, setPotasValue] = useState(data?.potass);
  const [CalsValue, setCalsValue] = useState(data?.calsium);
  const [vitAValue, setvitAValue] = useState(data?.vitA);
  const [vitCValue, setvitCValue] = useState(data?.vitC);
  const [IronValue, setIronValue] = useState(data?.iron);

  const handleSelectedChange = (e) => {
    const selectedValue = e.target.value;
    const selectedMeasurement = data?.measurements?.find(
      (measurement) => measurement.amount.toString() === selectedValue
    );
    if (selectedMeasurement) {
      setSelected(selectedMeasurement.amount);
      const userInputValue = selectedMeasurement.name.toLowerCase() === "gram" ? 100 : 1;
      setUserInput(userInputValue);
      updateResults(selectedMeasurement.amount, userInputValue);
    }
  };
  
  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
    updateResults(selected, e.target.value);
  };

  
  const updateResults = (selectedAmount, inputValue) => {
    const parsedInputValue = parseFloat(inputValue);
    if (!isNaN(parsedInputValue)) {
      let calculatedValue = parsedInputValue;
  
      // Seçili ölçümün adını bul
      const selectedMeasurement = data?.measurements?.find(
        (measurement) => measurement.amount === selectedAmount
      );
  
      // Eğer seçili ölçüm varsa ve adı "gram" ise, çarpma işlemini atla
      if (selectedMeasurement && selectedMeasurement.name.toLowerCase() === "gram") {

      } else {
        calculatedValue = selectedAmount * parsedInputValue;
      }
  
      setCalValue((data?.kcal * calculatedValue) / 100);
      setCarbValue((data?.carb * calculatedValue) / 100);
      setProtValue((data?.protein * calculatedValue) / 100);
      setFatValue((data?.fat * calculatedValue) / 100);
      setFibValue((data?.fibr * calculatedValue) / 100);
      setColValue((data?.colest * calculatedValue) / 100);
      setSodValue((data?.sodium * calculatedValue) / 100);
      setPotasValue((data?.potass * calculatedValue) / 100);
      setCalsValue((data?.calsium * calculatedValue) / 100);
      setvitAValue((data?.vitA * calculatedValue) / 100);
      setvitCValue((data?.vitC * calculatedValue) / 100);
      setIronValue((data?.iron * calculatedValue) / 100);
      setTotalGram(calculatedValue);
    } else {
      clearResults();
    }
  };
  const clearResults = () => {
    setCalValue("");
    setCarbValue("");
    setProtValue("");
    setFatValue("");
    setFibValue("");
    setColValue("");
    setSodValue("");
    setPotasValue("");
    setCalsValue("");
    setvitAValue("");
    setvitCValue("");
    setIronValue("");
  };
  useEffect(() => {
    if (data?.measurements && data.measurements.length > 0) {
      const initialMeasurement = data.measurements[0];
      setSelected(initialMeasurement.amount);
      const userInputValue = initialMeasurement.name.toLowerCase() === "gram" ? 100 : 1;
      setUserInput(userInputValue);
      updateResults(initialMeasurement.amount, userInputValue);
    }
  }, [data]);

  // useEffect(() => {
  //   setCalValue(data?.kcal);
  //   setCarbValue(data?.carb);
  //   setProtValue(data?.protein);
  //   setFatValue(data?.fat);

  //   setFibValue(data?.fibr);
  //   setColValue(data?.colest);
  //   setSodValue(data?.sodium);
  //   setPotasValue(data?.potass);
  //   setCalsValue(data?.calsium);
  //   setvitAValue(data?.vitA);
  //   setvitCValue(data?.vitC);
  //   setIronValue(data?.iron);
  // }, [data]);

  return (
    <div>
      <Row noGutters>
        <Col xs={12} sm={12} md={0} lg={0} xl={2}></Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={8}>
          <div className="" style={{ height: "auto" }}>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <div className="d-flex  align-items-center">
                <div className="imgCont d-flex mx-2">
                  <img
                    className="Pimg px-0"
                    src={`http://localhost:5149${data?.img}`}
                  />
                </div>
                <div className="mx-5">
                  <h1>{data?.name}</h1>
                  <span style={{ fontWeight: "bolder" }}>{TotalGram} G</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="inp d-flex">
                  <div className=" inp d-inline-block">
                    <Input
                      value={userInput}
                      onChange={handleUserInputChange}
                      type="text"
                      placeholder={"100"}
                      maxLength={4}
                      className=" mx-2 valueInput"
                    ></Input>
                  </div>
                  <div className="valueType d-flex">
                    <select onChange={handleSelectedChange}>
                      {/* {!loading &&
                        data?.measurements?.map((option, index) => (
                          <option key={index} value={Object.values(option)[0]}>
                            {Object.keys(option)[0]}
                          </option>
                        ))} */}
                         {!loading &&
                        data?.measurements?.map((measurement, index) => (
                          <option key={index} value={measurement.amount}>
                            {measurement.name}
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
                      <CountUp isCounting end={TotalGram} duration={1.2} /> gr
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Carbohydrates (g) </th>
                    <td></td>
                    <td>{data?.attributes?.carb}</td>
                    <td>
                      <CountUp isCounting end={CarbValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Protein (g)</th>
                    <td></td>
                    <td>{data?.attributes?.protein}</td>
                    <td>
                      {" "}
                      <CountUp isCounting end={ProtValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Fat (g)</th>
                    <td></td>
                    <td>{data?.attributes?.fat}</td>
                    <td>
                      <CountUp isCounting end={FatValue} duration={1.2} />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Fibre (g)</th>
                    <td></td>
                    <td>{data?.attributes?.fibr} </td>
                    <td>
                      <CountUp isCounting end={FibrValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">cholesterol (mg)</th>
                    <td></td>
                    <td>{data?.attributes?.colest}</td>
                    <td>
                      <CountUp isCounting end={ColestValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Sodium (mg)</th>
                    <td></td>
                    <td>{data?.attributes?.sodium}</td>
                    <td>
                      <CountUp isCounting end={SodiumValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Potassium (mg)</th>
                    <td></td>
                    <td>{data?.potassium}</td>
                    <td>
                      <CountUp isCounting end={potassiumValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Calcium (mg)</th>
                    <td></td>
                    <td>{data?.attributes?.calsium}</td>
                    <td>
                      <CountUp isCounting end={CalsValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Vitamin A (iu)</th>
                    <td></td>
                    <td>{data?.attributes?.vitA}</td>
                    <td>
                      <CountUp isCounting end={vitAValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Vitamin C (mg)</th>
                    <td></td>
                    <td>{data?.attributes?.vitC}</td>
                    <td>
                      <CountUp isCounting end={vitCValue} duration={1.2} />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Iron</th>
                    <td></td>
                    <td>{data?.attributes?.iron}</td>
                    <td>
                      <CountUp isCounting end={IronValue} duration={1.2} />
                    </td>
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
