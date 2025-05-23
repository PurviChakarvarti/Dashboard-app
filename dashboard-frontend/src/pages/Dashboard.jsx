// Dashboard.jsx
import React, { useState, useEffect } from "react";
import XBarChart from "../components/XBarChart";
import RChart from "../components/RChart";
import ParetoChart from "../components/ParetoChart";
import Histogram from "../components/Histogram";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
  Select,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import SettingsIcon from "@mui/icons-material/Settings";

const chartComponents = {
  XBarChart: <XBarChart />, 
  RChart: <RChart />, 
  ParetoChart: <ParetoChart />, 
  Histogram: <Histogram />,
};

const allCharts = [
  { id: "xbar", title: "X Bar Chart", component: "XBarChart" },
  { id: "rchart", title: "R Chart", component: "RChart" },
  { id: "pareto", title: "Pareto Chart", component: "ParetoChart" },
  { id: "histogram", title: "Histogram", component: "Histogram" },
];

const Dashboard = () => {
  const [visibleCharts, setVisibleCharts] = useState(
    () => JSON.parse(localStorage.getItem("visibleCharts")) || allCharts.reduce((acc, chart) => ({ ...acc, [chart.id]: true }), {})
  );
  const [layoutType, setLayoutType] = useState(
    () => localStorage.getItem("layoutType") || "two-column"
  );
  const [chartOrder, setChartOrder] = useState(
    () => JSON.parse(localStorage.getItem("chartOrder")) || allCharts.map((c) => c.id)
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("visibleCharts", JSON.stringify(visibleCharts));
    localStorage.setItem("layoutType", layoutType);
    localStorage.setItem("chartOrder", JSON.stringify(chartOrder));
  }, [visibleCharts, layoutType, chartOrder]);

  const handleToggle = (id) => {
    setVisibleCharts({ ...visibleCharts, [id]: !visibleCharts[id] });
  };

  const getGridStyle = () => {
    if (layoutType === "one-column") {
      return {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        padding: "1rem",
      };
    }
    return {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem",
      padding: "1rem",
    };
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(chartOrder);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setChartOrder(reordered);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div style={{ padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">Dashboard</Typography>
        <IconButton onClick={toggleDrawer}>
          <SettingsIcon />
        </IconButton>
      </div>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <div style={{ width: 300, padding: 20 }}>
          <Typography variant="h6" gutterBottom>Layout Configurator</Typography>
          <FormGroup>
            {allCharts.map((chart) => (
              <FormControlLabel
                key={chart.id}
                control={
                  <Checkbox
                    checked={visibleCharts[chart.id]}
                    onChange={() => handleToggle(chart.id)}
                  />
                }
                label={chart.title}
              />
            ))}
          </FormGroup>
          <Typography style={{ marginTop: 20 }}>Layout Type</Typography>
          <Select
            fullWidth
            value={layoutType}
            onChange={(e) => setLayoutType(e.target.value)}
          >
            <MenuItem value="two-column">Two Column</MenuItem>
            <MenuItem value="one-column">One Column</MenuItem>
          </Select>
        </div>
      </Drawer>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="chart-droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={getGridStyle()}>
              {chartOrder.map((chartId, index) => {
                const chart = allCharts.find((c) => c.id === chartId);
                if (!visibleCharts[chart.id]) return null;
                return (
                  <Draggable key={chart.id} draggableId={chart.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {chartComponents[chart.component]}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Dashboard;