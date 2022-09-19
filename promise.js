const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (ekspresi) => {
  let hasilNonton = 0;
  try {
    const TheaterIXX = await promiseTheaterIXX();
    const TheaterVGC = await promiseTheaterVGC();
    const result = [...TheaterIXX, ...TheaterVGC];
    
    result.forEach((Element) => {
      if (Element.hasil == ekspresi) {
        hasilNonton++;
      }
    });
    if (hasilNonton > 0) {
      return hasilNonton;
    };
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  promiseOutput,
};
