export const objectToQueryString = (obj) => {
  const str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p) && String(obj[p] || "")?.trim().length > 0) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return `?${str.join("&")}`;
};