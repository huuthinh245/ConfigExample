let encode = '{wlaAaxpiSMQqCcBkBsAiDeCo@s@OYIYwDaP_EsPIY@A@E?ECICCA?J_CRiHJuE@k@f@}EHcBDcCFkCDc@d@_C`@oAp@mBb@aACQ@MZgAf@eBhAgE`AmFPaAXaCN_ATs@Xu@p@uAbE{G^y@dAoCbA}CtA}DJ_@J}@JqAz@yLCSTQt@c@`BmA~@iAn@cA`@w@rBeDvBaDtDyGlBaEr@cB|@{Cr@uBdAmDbA{BZq@h@c@xBiAnBgAV[dBiJn@{D\\iCT{A`@aAfAwBxDsGl@iApAkC`AaCReADOt@gAnAqBbBaDfE|AfEzADiCBa@Cq@SyCQqBY_BA_@Lc@NUVk@h@u@fAeBlBaDXw@';
export const decode = (value) => {

  let values = decode.integers(value);
  let points = [];

  for (let i = 0; i < values.length; i += 2) {
    points.push([
      (values[i + 0] += (values[i - 2] || 0)) / 1e5,
      (values[i + 1] += (values[i - 1] || 0)) / 1e5,
    ]);
  }

  return points;

};

decode.sign = function (value) {
  return value & 1 ? ~(value >>> 1) : (value >>> 1);
};

decode.integers = function (value) {

  let values = [];
  let byte = 0;
  let current = 0;
  let bits = 0;

  for (let i = 0; i < value.length; i++) {

    byte = value.charCodeAt(i) - 63;
    current |= (( byte & 0x1F ) << bits );
    bits += 5;

    if (byte < 0x20) {
      values.push(decode.sign(current));
      current = 0;
      bits = 0;
    }

  }

  return values;

};

