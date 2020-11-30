function getDirectFlight(graph, array) {
  let totalCost = 0;
  let isTrue = true;

  for (let i = 0; i < array.length - 1; i++) {
    const airport = array[i];
    const destination = array[i + 1];
    const directFlight = graph.getNeighbors(airport);

    let directFound = false;

    for (let connection of directFlight) {
      if (connection.node === destination) {
        directFound = true;
        totalCost += connection.weight;
        break;
      }
    }
    if (!directFound) {
      isTrue = false;
      totalCost = 0;
      break;
    }
  }
  return {
    isTrue,
    totalCost,
  };
}

module.exports = { getDirectFlight };
