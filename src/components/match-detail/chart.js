import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels)

export const Chart = ({ title, homeTeam, awayTeam, data1, data2 }) => {
  const options = {
    responsive: true,
    plugins: {
      ChartDataLabels,
      legend: {
        display: true
      },
      title: {
        display: true,
        text: title
      },
      datalabels: {
        color: "#000",
        borderRadius: 15,
        anchor: "end",
        align: "top"
      }
    }
  }

  const labels = [homeTeam.name, awayTeam.name, "Total"]

  const data = {
    labels,
    datasets: [data1, data2]
  }

  return (
    <div className="col">
      <Bar options={options} data={data} />
    </div>
  )
}
