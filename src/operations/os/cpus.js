import os from 'node:os';

const createCpusTableData = (cpus) => {
  return cpus.map((cpu) => ({"Model": cpu.model, "Clock rate": `${cpu.speed / 1000} GHz`}));
}

const cpus = () => {
  const cpusData = os.cpus();
  const cpusTableData = createCpusTableData(cpusData);

  console.log('Overall amount of CPUS:', cpusData.length);
  console.table(cpusTableData);
}

export default cpus;