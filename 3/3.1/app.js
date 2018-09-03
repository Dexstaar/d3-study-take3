var dataset = [10, 20, 30, 40, 50];

var el = d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text('hello world');
    // .append('p')
    // .attr('class', 'foo')
    // .attr('class', 'bar')
    // .text('Hello World')
    // .classed('foo', true)
    // .classed('bar', true)
    // .style('color', 'blue');
console.log(el);