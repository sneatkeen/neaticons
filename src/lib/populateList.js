export default (list, defaults) => list.map(o => ({ ...o, ...defaults }));