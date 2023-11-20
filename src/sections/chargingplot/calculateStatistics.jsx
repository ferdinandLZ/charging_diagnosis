function calculateStatistics(dataList) {
    if (dataList.length === 0) {
      return [null, null, null];
    }

    const maxValue = Math.max(...dataList);
    const minValue = Math.min(...dataList);
    const avgValue = parseInt(dataList.reduce((sum, value) => sum + value, 0) / dataList.length,10);

    return [maxValue, minValue, avgValue];
  }
  export default calculateStatistics