export const fetchHello = async () => {
  const response = await fetch('/hello');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};