import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface TreeMapNode {
  name: string;
  value: number;
  description?: string;
  color: string;
}

interface TreeMapData {
  name: string;
  children: TreeMapNode[];
}

interface TreeMapProps {
  data: TreeMapData;
  width?: number;
  height?: number;
}

type TreeMapHierarchyNode = d3.HierarchyRectangularNode<TreeMapData | TreeMapNode>;

export const TreeMap = ({ data, width = 600, height = 400 }: TreeMapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('font-family', 'Inter, sans-serif');

    // Create hierarchy
    const root = d3
      .hierarchy<TreeMapData | TreeMapNode>(data)
      .sum((d) => ('value' in d ? d.value : 0))
      .sort((a, b) => (b.value || 0) - (a.value || 0));

    // Create treemap layout
    const treemap = d3
      .treemap<TreeMapData | TreeMapNode>()
      .size([width, height])
      .padding(3)
      .round(true);

    treemap(root);

    // Create cells
    const cell = svg
      .selectAll('g')
      .data(root.leaves() as TreeMapHierarchyNode[])
      .enter()
      .append('g')
      .attr('transform', (d: TreeMapHierarchyNode) => `translate(${d.x0},${d.y0})`)
      .style('cursor', 'pointer');

    // Add rectangles with rounded corners
    cell
      .append('rect')
      .attr('width', (d: TreeMapHierarchyNode) => d.x1 - d.x0)
      .attr('height', (d: TreeMapHierarchyNode) => d.y1 - d.y0)
      .attr('rx', 8) // Rounded corners
      .attr('ry', 8)
      .attr('fill', (d: TreeMapHierarchyNode) => (d.data as TreeMapNode).color)
      .style('opacity', 0)
      .transition()
      .duration(800)
      .style('opacity', 1);

    // Add hover effect
    cell
      .selectAll('rect')
      .on('mouseenter', function () {
        d3.select(this).transition().duration(200).style('opacity', 1);
      })
      .on('mouseleave', function () {
        d3.select(this).transition().duration(200).style('opacity', 0.9);
      });

    // Create text container for each cell
    const textGroup = cell.append('g');

    // Calculate optimal font sizes based on cell dimensions
    const getFontSize = (width: number, height: number, textLength: number, isTitle: boolean) => {
      const maxWidth = width - 20; // padding
      const maxHeight = height / (isTitle ? 3 : 5);
      const widthBased = maxWidth / (textLength * 0.6);
      const heightBased = maxHeight;
      return Math.max(10, Math.min(widthBased, heightBased, isTitle ? 18 : 14));
    };

    // Add category name (centered)
    textGroup
      .append('text')
      .attr('class', 'category-name')
      .text((d: TreeMapHierarchyNode) => {
        const name = (d.data as TreeMapNode).name;
        const width = d.x1 - d.x0;
        // Truncate if too long
        if (width < 100 && name.length > 15) {
          return name.substring(0, 12) + '...';
        }
        return name;
      })
      .attr('x', (d: TreeMapHierarchyNode) => (d.x1 - d.x0) / 2)
      .attr('y', (d: TreeMapHierarchyNode) => {
        const height = d.y1 - d.y0;
        return height / 2 - 10;
      })
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', (d: TreeMapHierarchyNode) => {
        const width = d.x1 - d.x0;
        const height = d.y1 - d.y0;
        const name = (d.data as TreeMapNode).name;
        return getFontSize(width, height, name.length, true) + 'px';
      })
      .attr('font-weight', '700')
      .attr('fill', 'white')
      .style('pointer-events', 'none')
      .style('opacity', 0)
      .transition()
      .delay(400)
      .duration(600)
      .style('opacity', 1);

    // Add percentage (centered, below name)
    textGroup
      .append('text')
      .attr('class', 'percentage')
      .text((d: TreeMapHierarchyNode) => `${(d.data as TreeMapNode).value}%`)
      .attr('x', (d: TreeMapHierarchyNode) => (d.x1 - d.x0) / 2)
      .attr('y', (d: TreeMapHierarchyNode) => {
        const height = d.y1 - d.y0;
        return height / 2 + 8;
      })
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', (d: TreeMapHierarchyNode) => {
        const width = d.x1 - d.x0;
        const height = d.y1 - d.y0;
        return getFontSize(width, height, 4, false) + 2 + 'px';
      })
      .attr('font-weight', '900')
      .attr('fill', 'white')
      .style('pointer-events', 'none')
      .style('opacity', 0)
      .transition()
      .delay(600)
      .duration(600)
      .style('opacity', 1);

    // Add description (centered, below percentage, only if enough space)
    textGroup
      .append('text')
      .attr('class', 'description')
      .text((d: TreeMapHierarchyNode) => {
        const height = d.y1 - d.y0;
        if (height < 90) return ''; // Don't show if not enough space
        return (d.data as TreeMapNode).description || '';
      })
      .attr('x', (d: TreeMapHierarchyNode) => (d.x1 - d.x0) / 2)
      .attr('y', (d: TreeMapHierarchyNode) => {
        const height = d.y1 - d.y0;
        return height / 2 + 28;
      })
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', (d: TreeMapHierarchyNode) => {
        const width = d.x1 - d.x0;
        const height = d.y1 - d.y0;
        const desc = (d.data as TreeMapNode).description || '';
        return Math.max(9, getFontSize(width, height, desc.length, false) - 2) + 'px';
      })
      .attr('font-weight', '400')
      .attr('fill', 'white')
      .attr('opacity', 0.85)
      .style('pointer-events', 'none')
      .style('opacity', 0)
      .transition()
      .delay(800)
      .duration(600)
      .style('opacity', 0.85);

  }, [data, width, height]);

  return <svg ref={svgRef} className="w-full h-auto" />;
};

