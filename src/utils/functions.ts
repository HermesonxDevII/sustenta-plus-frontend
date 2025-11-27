export const maskCPF = (value: string) => {
  let numericValue = value.replace(/\D/g, '');

  numericValue = numericValue.substring(0, 11);

  return numericValue.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    '$1.$2.$3-$4'
  );
}
