export function numberToRupiah(number) {
    if (typeof number !== "number") {
      return null;
    }
    return 'Rp. ' + number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }