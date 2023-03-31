const getIdFromResponse = (text: string) => {
  // const regex = /<id:(.*?)>/; // Matches anything between "<id:" and ">"
  // const regex = /id:(.*)/;
  const regex = /id:([^\s]+)/; // Matches anything after "id:" until the next space
  const match = regex.exec(text);

  if (match === null) return;

  return match[1].replace(/[<>]/g, ""); // The first capturing group contains the id string and remove the "<" and ">" characters
};

export { getIdFromResponse };
