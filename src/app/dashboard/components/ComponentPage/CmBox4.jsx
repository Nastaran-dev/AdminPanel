"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { myTheme } from "@/app/store/Store";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

// Convert hex color to rgba with opacity
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const titanicData = [
  { Class: "1st", Survived: "No", Count: 123 },
  { Class: "1st", Survived: "Yes", Count: 202 },
  { Class: "2nd", Survived: "No", Count: 167 },
  { Class: "2nd", Survived: "Yes", Count: 118 },
  { Class: "3rd", Survived: "No", Count: 528 },
  { Class: "3rd", Survived: "Yes", Count: 178 },
  { Class: "Crew", Survived: "No", Count: 696 },
  { Class: "Crew", Survived: "Yes", Count: 212 },
];

const classes = ["1st", "2nd", "3rd", "Crew"];

const totalCount = titanicData.reduce((acc, item) => acc + item.Count, 0);

// Define colors for each class
const classColors = {
  "1st": "#fa938e",
  "2nd": "#98bf45",
  "3rd": "#51cbcf",
  Crew: "#d397ff",
};

// Different opacity based on class
const opacityMap = {
  "1st": 0.9,
  "2nd": 0.7,
  "3rd": 0.5,
  Crew: 0.3,
};

const classData = classes.map((pClass) => {
  const classTotal = titanicData
    .filter((item) => item.Class === pClass)
    .reduce((acc, item) => acc + item.Count, 0);
  return {
    id: pClass,
    label: `${pClass} Class:`,
    value: classTotal,
    percentage: (classTotal / totalCount) * 100,
    color: classColors[pClass],
  };
});

const classSurvivalData = classes.flatMap((pClass) => {
  const classTotal = classData.find((d) => d.id === pClass).value ?? 0;
  const baseColor = classColors[pClass];
  return titanicData
    .filter((item) => item.Class === pClass)
    .sort((a, b) => (a.Survived > b.Survived ? 1 : -1))
    .map((item) => ({
      id: `${pClass}-${item.Survived}`,
      label: item.Survived,
      value: item.Count,
      percentage: (item.Count / classTotal) * 100,
      color: item.Survived === "Yes" ? baseColor : `${baseColor}80`,
    }));
});

const survivalData = [
  {
    id: "Yes",
    label: "Survived:",
    value: titanicData
      .filter((item) => item.Survived === "Yes")
      .reduce((sum, item) => sum + item.Count, 0),
    percentage:
      (titanicData
        .filter((item) => item.Survived === "Yes")
        .reduce((sum, item) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors["3rd"],
  },
  {
    id: "No",
    label: "Did not survive:",
    value: titanicData
      .filter((item) => item.Survived === "No")
      .reduce((sum, item) => sum + item.Count, 0),
    percentage:
      (titanicData
        .filter((item) => item.Survived === "No")
        .reduce((sum, item) => sum + item.Count, 0) /
        totalCount) *
      100,
    color: classColors["1st"],
  },
];

const survivalClassData = [...titanicData]
  .sort((a) => (a.Survived === "Yes" ? -1 : 1))
  .map((item) => {
    const baseColor = survivalData.find((d) => d.id === item.Survived).color;
    return {
      id: `${item.Class}-${item.Survived}`,
      label: `${item.Class} class:`,
      value: item.Count,
      percentage:
        (item.Count /
          (item.Survived === "Yes"
            ? survivalData[0].value
            : survivalData[1].value)) *
        100,
      color: hexToRgba(baseColor, opacityMap[item.Class] || 1),
    };
  });

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children, dark }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 2}
      style={{ fill: dark ? "#fff" : "#000" }}
    >
      {children}
    </StyledText>
  );
}

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function CmBox4() {
  const { dark } = useContext(myTheme);
  const [view, setView] = React.useState("class");

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const innerRadius = 50;
  const middleRadius = 120;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
        flexDirection: { xs: "column", lg: "row" },
        marginTop: "20px",
        overflowX: "hidden",
      }}
    >
      {/* LineChart Box */}
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "60%",
          },
          height: "500px",
          borderRadius: "10px",
          backgroundColor: dark ? "#1e2126" : "white",
          border: dark ? "0.1px solid #35383c" : "0.1px solid #e0e0e0",
          overflow: "hidden",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <LineChart
            sx={{
              width: "100%",
              // محورها و خطوط اصلی
              "& .MuiChartsAxis-root .MuiChartsAxis-line": {
                stroke: dark
                  ? "rgba(255, 255, 255, 0.5)"
                  : "rgba(0, 0, 0, 0.5)",
              },
              // تیک‌های محورها
              "& .MuiChartsAxis-root .MuiChartsAxis-tick": {
                stroke: dark
                  ? "rgba(255, 255, 255, 0.5)"
                  : "rgba(0, 0, 0, 0.5)",
              },
              // برچسب‌های محور X و Y
              "& .MuiChartsAxis-root .MuiChartsAxis-tickLabel": {
                fill: `${dark ? "#ffffff" : "#000000"} !important`,
                fontSize: "13px",
              },
              // محور X
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                fill: `${dark ? "#ffffff" : "#000000"} !important`,
              },
              // محور Y
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                fill: `${dark ? "#ffffff" : "#000000"} !important`,
              },
              // عنوان محورها
              "& .MuiChartsAxis-label": {
                fill: `${dark ? "#ffffff" : "#000000"} !important`,
              },
              // Legend (راهنما)
              "& .MuiChartsLegend-series text": {
                fill: `${dark ? "#ffffff" : "#000000"} !important`,
              },
              // برچسب Legend
              "& .MuiChartsLegend-label": {
                fill: `${dark ? "#ffffff" : "#000000"} !important`,
              },
              // خطوط شبکه
              "& .MuiChartsGrid-line": {
                stroke: dark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
                strokeDasharray: "3 3",
              },
              // خطوط نمودار
              "& .MuiLineElement-root": {
                strokeWidth: 3,
              },
              // نقاط روی خطوط
              "& .MuiMarkElement-root": {
                stroke: dark ? "#1e2126" : "#fff",
                strokeWidth: 2,
              },
            }}
            series={[
              {
                data: pData,
                label: "pv",
                color: dark ? "#51cbcf" : "#1976d2",
                showMark: ({ index }) => index % 2 === 0,
              },
              {
                data: uData,
                label: "uv",
                color: dark ? "#fa938e" : "#dc004e",
                showMark: ({ index }) => index % 2 === 0,
              },
            ]}
            xAxis={[
              {
                scaleType: "point",
                data: xLabels,
              },
            ]}
            yAxis={[{}]}
            grid={{ horizontal: true }}
            slotProps={{
              legend: {
                direction: "row",
                position: { vertical: "top", horizontal: "middle" },
                padding: 0,
                labelStyle: {
                  fill: dark ? "#ffffff" : "#000000",
                  fontSize: "14px",
                },
              },
            }}
          />
        </Box>
      </Box>

      {/* PieChart Box */}
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "40%",
          },
          height: "500px",
          borderRadius: "10px",
          backgroundColor: dark ? "#1e2126" : "white",
          border: dark ? "0.1px solid #35383c" : "0.1px solid #e0e0e0",
          padding: "20px",
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: dark ? "white" : "black",
              marginBottom: "15px",
            }}
          >
            Titanic survival statistics
          </Typography>

          <ToggleButtonGroup
            size="small"
            value={view}
            exclusive
            onChange={handleViewChange}
            sx={{
              marginBottom: "10px",
              "& .MuiToggleButton-root": {
                color: dark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
                borderColor: dark
                  ? "rgba(255, 255, 255, 0.23)"
                  : "rgba(0, 0, 0, 0.23)",
                "&.Mui-selected": {
                  color: dark ? "#fff" : "#1976d2",
                  backgroundColor: dark
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(25, 118, 210, 0.12)",
                  borderColor: dark
                    ? "rgba(255, 255, 255, 0.23)"
                    : "rgba(25, 118, 210, 0.5)",
                  "&:hover": {
                    backgroundColor: dark
                      ? "rgba(255, 255, 255, 0.16)"
                      : "rgba(25, 118, 210, 0.16)",
                  },
                },
                "&:hover": {
                  backgroundColor: dark
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.04)",
                },
              },
            }}
          >
            <ToggleButton value="class">View by Class</ToggleButton>
            <ToggleButton value="survival">View by Survival</ToggleButton>
          </ToggleButtonGroup>

          <Box sx={{ display: "flex", justifyContent: "center", height: 380 }}>
            {view === "class" ? (
              <PieChart
                series={[
                  {
                    innerRadius,
                    outerRadius: middleRadius,
                    data: classData,
                    arcLabel: (item) =>
                      `${item.id} (${item.percentage.toFixed(0)}%)`,
                    valueFormatter: ({ value }) =>
                      `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                    highlightScope: { fade: "global", highlight: "item" },
                    highlighted: { additionalRadius: 2 },
                    cornerRadius: 3,
                  },
                  {
                    innerRadius: middleRadius,
                    outerRadius: middleRadius + 20,
                    data: classSurvivalData,
                    arcLabel: (item) =>
                      `${item.label} (${item.percentage.toFixed(0)}%)`,
                    valueFormatter: ({ value }) =>
                      `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                    arcLabelRadius: 160,
                    highlightScope: { fade: "global", highlight: "item" },
                    highlighted: { additionalRadius: 2 },
                    cornerRadius: 3,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fontSize: "12px",
                    fill: dark ? "#fff" : "#000",
                    fontWeight: 500,
                  },
                }}
                slotProps={{
                  legend: {
                    hidden: true,
                  },
                }}
              >
                <PieCenterLabel dark={dark}>Class</PieCenterLabel>
              </PieChart>
            ) : (
              <PieChart
                series={[
                  {
                    innerRadius,
                    outerRadius: middleRadius,
                    data: survivalData,
                    arcLabel: (item) =>
                      `${item.id} (${item.percentage.toFixed(0)}%)`,
                    valueFormatter: ({ value }) =>
                      `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                    highlightScope: { fade: "global", highlight: "item" },
                    highlighted: { additionalRadius: 2 },
                    cornerRadius: 3,
                  },
                  {
                    innerRadius: middleRadius,
                    outerRadius: middleRadius + 20,
                    data: survivalClassData,
                    arcLabel: (item) => {
                      const id = item.id || "";
                      const percentage = item.percentage || 0;
                      return `${id.split("-")[0]} (${percentage.toFixed(0)}%)`;
                    },
                    arcLabelRadius: 160,
                    valueFormatter: ({ value }) =>
                      `${value} out of ${totalCount} (${((value / totalCount) * 100).toFixed(0)}%)`,
                    highlightScope: { fade: "global", highlight: "item" },
                    highlighted: { additionalRadius: 2 },
                    cornerRadius: 3,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fontSize: "12px",
                    fill: dark ? "#fff" : "#000",
                    fontWeight: 500,
                  },
                }}
                slotProps={{
                  legend: {
                    hidden: true,
                  },
                }}
              >
                <PieCenterLabel dark={dark}>Survived</PieCenterLabel>
              </PieChart>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
