import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./BrainMainArea.css";

export default function BrainMainArea() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    const concepts = [
      { name: "Neural Networks", category: 0 },
      { name: "Reinforcement Learning", category: 1 },
      { name: "Computer Vision", category: 2 },
      { name: "NLP", category: 2 },
      { name: "Robotics", category: 1 },
      { name: "Data Preprocessing", category: 0 },
      { name: "Optimization", category: 0 },
      { name: "Deep Learning", category: 0 },
      { name: "Generative Models", category: 2 },
    ];

    const links = [
      { source: "Neural Networks", target: "Deep Learning" },
      { source: "Deep Learning", target: "Computer Vision" },
      { source: "Deep Learning", target: "NLP" },
      { source: "Reinforcement Learning", target: "Robotics" },
      { source: "Generative Models", target: "Deep Learning" },
      { source: "Optimization", target: "Deep Learning" },
      { source: "Data Preprocessing", target: "Neural Networks" },
    ];

    const categories = [
      { name: "Core", itemStyle: { color: "#5470C6" } },
      { name: "Applied", itemStyle: { color: "#91CC75" } },
      { name: "Advanced", itemStyle: { color: "#EE6666" } },
    ];

    const option = {
      tooltip: {
        show: true,
      },
      legend: {
        show: true,
        data: categories.map((c) => c.name),
        left: "left",
      },
      series: [
        {
          name: "Concept Network",
          type: "graph",
          layout: "force",
          roam: true,
          symbolSize: 20,
          categories: categories,
          label: {
            show: false,
            position: "right",
            formatter: "{b}",
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data: concepts,
          links: links,
          force: {
            repulsion: 200,
            edgeLength: [50, 150],
          },
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="brain-main-area">
      <h2>Brain Concept Map</h2>
      <div
        ref={chartRef}
        style={{ width: "100%", height: "600px" }}
      ></div>
    </main>
  );
}
