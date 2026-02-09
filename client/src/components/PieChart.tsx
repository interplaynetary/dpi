import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PieChartData {
  category: string;
  percentage: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
  width?: number;
  height?: number;
}

export const PieChart = ({ data, width = 300, height = 300 }: PieChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const radius = Math.min(width, height) / 2;
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create pie layout
    const pie = d3
      .pie<PieChartData>()
      .value((d) => d.percentage)
      .sort(null);

    // Create arc generator
    const arc = d3
      .arc<d3.PieArcDatum<PieChartData>>()
      .innerRadius(radius * 0.6) // Donut chart
      .outerRadius(radius * 0.9);

    // Create hover arc
    const hoverArc = d3
      .arc<d3.PieArcDatum<PieChartData>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius * 0.95);

    // Add slices
    const slices = svg
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => d.data.color)
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .style('transition', 'all 0.3s ease')
      .on('mouseenter', function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', () => hoverArc(d) || '')
          .style('opacity', 0.8);
      })
      .on('mouseleave', function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', () => arc(d) || '')
          .style('opacity', 1);
      });

    // Animate slices on mount
    slices
      .transition()
      .duration(1000)
      .attrTween('d', function (d) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arc(interpolate(t)) || '';
        };
      });

    // Add percentage labels
    svg
      .selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('transform', (d) => {
        const pos = arc.centroid(d);
        return `translate(${pos[0]}, ${pos[1]})`;
      })
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .style('fill', 'white')
      .style('font-weight', 'bold')
      .style('font-size', '14px')
      .style('pointer-events', 'none')
      .text((d) => `${d.data.percentage}%`)
      .style('opacity', 0)
      .transition()
      .delay(1000)
      .duration(500)
      .style('opacity', 1);
  }, [data, width, height]);

  return <svg ref={svgRef} />;
};

