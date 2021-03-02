export const FilterLocations = (locations: any) => {
  // removes locations from the list of locations that are not bookable
  const results = locations.filter(
    (location: any) => location.bookable === true
  );

  return results;
};
