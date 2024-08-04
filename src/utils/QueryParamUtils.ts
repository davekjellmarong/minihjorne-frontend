export const addQueryParam = (
  router: any,
  queryTemplate: string,
  itemId: string,
) => {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.append(queryTemplate.slice(1, -1), itemId);
  const newUrl = window.location.pathname + "?" + queryParams.toString();
  router.push(newUrl);
};

// todo - clean up these functions with less params and split them up into 3 maybe?
export const removeQueryParam = (
  router: any,
  queryTemplate: string,
  itemId: string,
) => {
  const queryParams = new URLSearchParams(window.location.search);
  const queryKey = queryTemplate.slice(1, -1);
  const allQueryParams = queryParams.getAll(queryKey);
  const newQueryParams = allQueryParams.filter(
    (query) => query !== String(itemId),
  );

  if (newQueryParams.length > 0) {
    queryParams.delete(queryKey);
    newQueryParams.forEach((param) => queryParams.append(queryKey, param));
  } else {
    queryParams.delete(queryKey);
  }

  const newUrl = window.location.pathname + "?" + queryParams.toString();
  router.push(newUrl);
};

export const handleRemoveFilter = (
  router: any,
  pathname: any,
  params: any,
  key: any,
  filterId: any,
) => {
  const queryKey = `filters[${key}][id][$eq]`;
  const allQueryParams = params.getAll(queryKey);
  const newQueryParams = allQueryParams.filter(
    (param: any) => param !== String(filterId),
  );

  if (newQueryParams.length > 0) {
    params.delete(queryKey);
    newQueryParams.forEach((param: any) => params.append(queryKey, param));
  } else {
    params.delete(queryKey);
  }

  router.push(`${pathname}?${params.toString()}`); // Update the URL
};
