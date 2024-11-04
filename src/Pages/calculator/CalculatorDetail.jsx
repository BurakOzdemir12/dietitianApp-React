import React, { useContext, useEffect, useState } from "react";
import {
  facts,
  option,
  products,
} from "../../Components/Json/NutritionalItems";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";

import { Col, Dropdown, DropdownItem, Input, Row } from "reactstrap";
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
import {
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { color, motion } from "framer-motion";
import styled from "styled-components";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const CalculatorDetail = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`${urlFoods}/${id}`);
  // console.log(data?.measurements);

  const measurementNames = data?.measurements?.map(
    (measurement) => measurement.name
  );
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
      const userInputValue =
        selectedMeasurement.name.toLowerCase() === "gram" ? 100 : 1;
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
      if (
        selectedMeasurement &&
        selectedMeasurement.name.toLowerCase() === "gram"
      ) {
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
      const userInputValue =
        initialMeasurement.name.toLowerCase() === "gram" ? 100 : 1;
      setUserInput(userInputValue);
      updateResults(initialMeasurement.amount, userInputValue);
    }
  }, [data]);

  const macro = ProtValue + CarbValue + FatValue;
  const protPercent = ((ProtValue / macro) * 100).toFixed(0);
  const carbPercent = ((CarbValue / macro) * 100).toFixed(0);
  const fatPercent = ((FatValue / macro) * 100).toFixed(0);
  console.log(macro);
  const Data = {
    labels: ["% Karbonhidrat", " % Protein", " % Yağ"],
    datasets: [
      {
        label: "",
        data: [carbPercent, protPercent, fatPercent],
        backgroundColor: ["#008b8b", "rgb(255, 99, 132)", "rgb(255, 205, 86)"],
        hoverOffset: 1,
      },
    ],
  };

  // if you want the use the styled select and option you can use this code down below
  // const StyledSelect = styled(motion.select)`
  //   appearance: none;
  //   background-color: #f0f0f0;
  //   border: 2px solid #ddd;
  //   border-radius: 10px;
  //   padding: 10px;
  //   font-size: 16px;
  //   box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  //   transition: box-shadow 0.3s ease;

  //   &:hover {
  //     box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  //   }

  //   &:focus {
  //     outline: none;
  //     border-color: #a29bfe;
  //     box-shadow: 0px 8px 25px rgba(162, 155, 254, 0.6);
  //   }
  // `;

  // const StyledOption = styled.option`
  //   padding: 10px;
  // `;
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      <Row noGutters>
        <Col
          style={{ backgroundColor: colors.backGround[400] }}
          xs={12}
          sm={12}
          md={0}
          lg={0}
          xl={2}
        ></Col>

        <Col
          style={{ backgroundColor: colors.backGround[400] }}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={8}
        >
          <div className="" style={{ height: "auto" }}>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <Box
                sx={{ "@media(max-width:320px)": {} }}
                className="  d-inline-flex  align-items-center"
              >
                <div className="imgCont d-flex mx-2">
                  <img
                    className="Pimg mt-5 px-0"
                    src={`http://localhost:5149${data?.img}`}
                  />
                </div>
                <Box className="  ">
                  <h1 style={{ color: colors.backGround[500] }}>
                    {data?.name}
                  </h1>
                  <span
                    style={{
                      color: colors.backGround[500],
                      fontWeight: "bolder",
                    }}
                  >
                    {TotalGram} Gr
                  </span>
                </Box>
              </Box>
              <div className="mt-4">
                <div className="inp d-flex">
                  <div className=" inp d-inline-block">
                    <Input
                      value={userInput}
                      onChange={handleUserInputChange}
                      type="text"
                      placeholder={"100"}
                      maxLength={4}
                      className={`mx-2 valueInput ${
                        isFocused ? "focused" : ""
                      }`}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    ></Input>
                  </div>
                  <div className="valueType d-flex">
                    {/* <StyledSelect
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 150 }}
                      onChange={(e) => handleSelectedChange(e)}
                    >
                      {!loading &&
                        data?.measurements?.map((measurement, index) => (
                          <StyledOption
                           key={index} value={measurement.amount}>
                            {measurement.name}
                          </StyledOption>
                        ))}
                    </StyledSelect>
                    */}
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 150 }}
                    >
                      <FormControl fullWidth>
                        <Select
                          value={selected}
                          onChange={handleSelectedChange}
                          sx={{
                            color: "black",
                            backgroundColor: "whitesmoke",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                            "&:hover": {
                              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                            },
                            "&.Mui-focused": {
                              borderColor: "#a29bfe",
                              boxShadow:
                                "0px 8px 25px rgba(162, 155, 254, 0.6)",
                            },
                          }}
                        >
                          {!loading &&
                            data?.measurements?.map((measurement, index) => (
                              <MenuItem
                                sx={{
                                  backgroundColor:
                                    selected === measurement.amount
                                      ? "#a29bfe"
                                      : "white",
                                  color:
                                    selected === measurement.amount
                                      ? "black"
                                      : "black",
                                  "&:hover": {
                                    backgroundColor: "#f0f0f0",
                                  },
                                  "&.Mui-selected": {
                                    backgroundColor: "#e0e0e0 !important",
                                    color: "black",
                                  },
                                  "&.Mui-selected:hover": {
                                    backgroundColor: "#d0d0d0",
                                  },
                                }}
                                key={index}
                                value={measurement.amount.toString()}
                              >
                                <Typography
                                  variant="h5"
                                  sx={{ color: colors.primary[500] }}
                                >
                                  {" "}
                                  {measurement.name}
                                </Typography>
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </motion.div>
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
                        <CountUp
                          style={{ color: colors.backGround[500] }}
                          isCounting
                          end={CalValue}
                          duration={1.2}
                        />

                        <span style={{ color: colors.backGround[500] }}>
                          {" "}
                          gr
                        </span>
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
                        <CountUp
                          style={{ color: colors.backGround[500] }}
                          isCounting
                          end={CarbValue}
                          duration={1.2}
                        />{" "}
                        <span style={{ color: colors.backGround[500] }}>
                          {" "}
                          gr
                        </span>
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
                        <CountUp
                          style={{ color: colors.backGround[500] }}
                          isCounting
                          end={ProtValue}
                          duration={1.2}
                        />{" "}
                        <span style={{ color: colors.backGround[500] }}>
                          {" "}
                          gr
                        </span>
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
                        <CountUp
                          style={{ color: colors.backGround[500] }}
                          isCounting
                          end={FatValue}
                          duration={1.2}
                        />{" "}
                        <span style={{ color: colors.backGround[500] }}>
                          {" "}
                          gr
                        </span>
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

        <Col
          style={{ backgroundColor: colors.backGround[400] }}
          xs={12}
          sm={12}
          md={0}
          lg={0}
          xl={2}
        ></Col>

        <Row noGutters>
          <Col
            style={{ backgroundColor: colors.backGround[400] }}
            xs={12}
            sm={12}
            md={0}
            lg={0}
            xl={2}
          ></Col>
          <Col
            style={{ backgroundColor: colors.backGround[400] }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={8}
          >
            {" "}
            <div className="mx-5 fullpage">
              <h3
                style={{ fontWeight: "bold", color: colors.backGround[500] }}
                className="mx-3 py-5 mt-1"
              >
                Besin Değerleri
              </h3>

              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "0px 0px 26px 20px rgba(179,179,179,1)",
                  mb: 5,
                  backgroundColor: colors.backGround[600],
                }}
              >
                <Table aria-label="nutrition table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        {" "}
                        <Typography variant="h3" fontWeight={700}>
                          {" "}
                          {data?.name}{" "}
                        </Typography>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell align="right">
                        <Typography fontWeight={600} variant="h4">
                          100 gr
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontWeight={600} variant="h4">
                          <CountUp isCounting end={TotalGram} duration={1.2} />{" "}
                          gr
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      {
                        name: "Carbohydrates (g)",
                        value: CarbValue,
                        dataValue: data?.carb,
                      },
                      {
                        name: "Protein (g)",
                        value: ProtValue,
                        dataValue: data?.protein,
                      },
                      {
                        name: "Fat (g)",
                        value: FatValue,
                        dataValue: data?.fat,
                      },
                      {
                        name: "Fibre (g)",
                        value: FibrValue,
                        dataValue: data?.fibr,
                      },
                      {
                        name: "Cholesterol (mg)",
                        value: ColestValue,
                        dataValue: data?.colest,
                      },
                      {
                        name: "Sodium (mg)",
                        value: SodiumValue,
                        dataValue: data?.sodium,
                      },
                      {
                        name: "Potassium (mg)",
                        value: potassiumValue,
                        dataValue: data?.potassium,
                      },
                      {
                        name: "Calcium (mg)",
                        value: CalsValue,
                        dataValue: data?.calsium,
                      },
                      {
                        name: "Vitamin A (iu)",
                        value: vitAValue,
                        dataValue: data?.vitA,
                      },
                      {
                        name: "Vitamin C (mg)",
                        value: vitCValue,
                        dataValue: data?.vitC,
                      },
                      { name: "Iron", value: IronValue, dataValue: data?.iron },
                    ].map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          <Typography variant="h6" fontWeight={600}>
                            {row.name}
                          </Typography>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">
                          <Typography fontWeight="bold">
                            {row.dataValue}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography fontWeight="bold">
                            {" "}
                            <CountUp
                              isCounting
                              end={row.value}
                              duration={1.2}
                            />
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Col>
          <Col
            style={{ backgroundColor: colors.backGround[400] }}
            xs={12}
            sm={12}
            md={0}
            lg={0}
            xl={2}
          ></Col>
        </Row>
      </Row>
    </div>
  );
};

export default CalculatorDetail;
